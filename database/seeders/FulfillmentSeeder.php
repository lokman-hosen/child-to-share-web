<?php

namespace Database\Seeders;

use App\Models\Wish;
use App\Models\Donation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FulfillmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing data
        $wishes = Wish::all();
        $donations = Donation::all();
        $donors = User::where('role', 'donor')->get();
        $wishers = User::where('role', 'wisher')->get();

        if ($wishes->isEmpty() || $donations->isEmpty() || $donors->isEmpty() || $wishers->isEmpty()) {
            $this->command->error('Please seed Wishes, Donations, and Users first!');
            return;
        }

        $fulfillments = [
            [
                'wish_id' => $wishes->where('status', 'approved')->random()->id,
                'donation_id' => $donations->where('status', 'available')->random()->id,
                'donor_id' => $donors->random()->id,
                'wisher_id' => $wishers->random()->id,
                'status' => 'pending',
                'needs_admin_support' => true,
                'admin_notes' => 'Waiting for donor confirmation',
                'scheduled_at' => null,
                'delivered_at' => null,
                'guardian_confirmed' => false,
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'wish_id' => $wishes->where('status', 'approved')->random()->id,
                'donation_id' => $donations->where('status', 'available')->random()->id,
                'donor_id' => $donors->random()->id,
                'wisher_id' => $wishers->random()->id,
                'status' => 'scheduled',
                'needs_admin_support' => true,
                'admin_notes' => 'Pickup scheduled for next week',
                'scheduled_at' => now()->addDays(3),
                'delivered_at' => null,
                'guardian_confirmed' => false,
                'created_at' => now()->subDays(5),
                'updated_at' => now()->subDays(1),
            ],
            [
                'wish_id' => $wishes->where('status', 'approved')->random()->id,
                'donation_id' => $donations->where('status', 'available')->random()->id,
                'donor_id' => $donors->random()->id,
                'wisher_id' => $wishers->random()->id,
                'status' => 'in_progress',
                'needs_admin_support' => false,
                'admin_notes' => 'Donor will deliver directly',
                'scheduled_at' => now()->addDays(1),
                'delivered_at' => null,
                'guardian_confirmed' => false,
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subHours(6),
            ],
            [
                'wish_id' => $wishes->where('status', 'approved')->random()->id,
                'donation_id' => $donations->where('status', 'available')->random()->id,
                'donor_id' => $donors->random()->id,
                'wisher_id' => $wishers->random()->id,
                'status' => 'delivered',
                'needs_admin_support' => true,
                'admin_notes' => 'Successfully delivered yesterday',
                'scheduled_at' => now()->subDays(2),
                'delivered_at' => now()->subDays(1),
                'guardian_confirmed' => true,
                'created_at' => now()->subDays(7),
                'updated_at' => now()->subDays(1),
            ],
            [
                'wish_id' => $wishes->where('status', 'approved')->random()->id,
                'donation_id' => $donations->where('status', 'available')->random()->id,
                'donor_id' => $donors->random()->id,
                'wisher_id' => $wishers->random()->id,
                'status' => 'cancelled',
                'needs_admin_support' => true,
                'admin_notes' => 'Donor changed their mind',
                'scheduled_at' => null,
                'delivered_at' => null,
                'guardian_confirmed' => false,
                'created_at' => now()->subDays(4),
                'updated_at' => now()->subDays(2),
            ]
        ];

        DB::table('fulfillments')->insert($fulfillments);
    }
}