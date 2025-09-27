<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Wish;
use App\Models\Donation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModerationLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing data
        $wishes = Wish::all();
        $donations = Donation::all();
        $moderators = User::where('role', 'admin')->get();

        if ($wishes->isEmpty() || $donations->isEmpty() || $moderators->isEmpty()) {
            $this->command->error('Please seed Wishes, Donations, and Admin Users first!');
            return;
        }

        $moderationLogs = [
            [
                'moderatable_type' => 'App\Models\Wish',
                'moderatable_id' => $wishes->random()->id,
                'moderator_id' => $moderators->random()->id,
                'action' => 'approved',
                'reason' => 'Content meets community guidelines',
                'nsfw_score' => 0.05,
                'detected_tags' => json_encode(['books', 'educational']),
                'created_at' => now()->subDays(5),
                'updated_at' => now()->subDays(5),
            ],
            [
                'moderatable_type' => 'App\Models\Donation',
                'moderatable_id' => $donations->random()->id,
                'moderator_id' => $moderators->random()->id,
                'action' => 'rejected',
                'reason' => 'Image quality too poor, please upload clearer photos',
                'nsfw_score' => 0.12,
                'detected_tags' => json_encode(['toys', 'blurry']),
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subDays(3),
            ],
            [
                'moderatable_type' => 'App\Models\Wish',
                'moderatable_id' => $wishes->random()->id,
                'moderator_id' => null,
                'action' => 'auto_flagged',
                'reason' => 'Automatically flagged by NSFW detection system',
                'nsfw_score' => 0.87,
                'detected_tags' => json_encode(['suspicious', 'needs_review']),
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'moderatable_type' => 'App\Models\Donation',
                'moderatable_id' => $donations->random()->id,
                'moderator_id' => $moderators->random()->id,
                'action' => 'flagged',
                'reason' => 'Item description contains inappropriate language',
                'nsfw_score' => 0.45,
                'detected_tags' => json_encode(['language', 'review_required']),
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subDays(1),
            ],
            [
                'moderatable_type' => 'App\Models\Wish',
                'moderatable_id' => $wishes->random()->id,
                'moderator_id' => $moderators->random()->id,
                'action' => 'approved',
                'reason' => 'Clean content, approved for public viewing',
                'nsfw_score' => 0.02,
                'detected_tags' => json_encode(['clothes', 'appropriate']),
                'created_at' => now()->subHours(6),
                'updated_at' => now()->subHours(6),
            ]
        ];

        DB::table('moderation_logs')->insert($moderationLogs);
    }
}