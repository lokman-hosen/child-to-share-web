<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing users
        $users = User::all();

        if ($users->isEmpty()) {
            $this->command->error('Please seed Users first!');
            return;
        }

        $notifications = [
            [
                'type' => 'App\Notifications\WishFulfilled',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => $users->random()->id,
                'data' => json_encode([
                    'message' => 'Your wish for a winter jacket has been fulfilled!',
                    'wish_id' => 1,
                    'action_url' => '/wishes/1'
                ]),
                'read_at' => null,
                'created_at' => now()->subHours(2),
                'updated_at' => now()->subHours(2),
            ],
            [
                'type' => 'App\Notifications\NewMessage',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => $users->random()->id,
                'data' => json_encode([
                    'message' => 'You have a new message from a donor',
                    'sender_name' => 'John Doe',
                    'action_url' => '/messages/1'
                ]),
                'read_at' => now()->subHours(1),
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subHours(1),
            ],
            [
                'type' => 'App\Notifications\DonationApproved',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => $users->random()->id,
                'data' => json_encode([
                    'message' => 'Your donation item has been approved',
                    'donation_title' => 'Children Story Books',
                    'action_url' => '/donations/1'
                ]),
                'read_at' => null,
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'type' => 'App\Notifications\TaskAssigned',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => $users->where('role', 'admin')->first()->id,
                'data' => json_encode([
                    'message' => 'New fulfillment task assigned to you',
                    'task_id' => 3,
                    'action_url' => '/admin/tasks/3'
                ]),
                'read_at' => now()->subHours(3),
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subHours(3),
            ],
            [
                'type' => 'App\Notifications\WishStatusUpdate',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => $users->random()->id,
                'data' => json_encode([
                    'message' => 'Your wish status has been updated to approved',
                    'wish_title' => 'Science Encyclopedia',
                    'action_url' => '/wishes/2'
                ]),
                'read_at' => null,
                'created_at' => now()->subHours(6),
                'updated_at' => now()->subHours(6),
            ]
        ];

        DB::table('notifications')->insert($notifications);
    }
}