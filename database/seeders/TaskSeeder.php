<?php

namespace Database\Seeders;

use App\Models\Fulfillment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing data
        $fulfillments = Fulfillment::all();
        $admins = User::where('role', 'admin')->get();

        if ($fulfillments->isEmpty() || $admins->isEmpty()) {
            $this->command->error('Please seed Fulfillments and Admin Users first!');
            return;
        }

        $tasks = [
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'user_id' => $admins->random()->id,
                'task_notes' => 'Need to schedule pickup from donor and delivery to wisher',
                'activity_log' => json_encode([
                    ['action' => 'Task created', 'timestamp' => now()->subDays(2)->toDateTimeString()],
                    ['action' => 'Assigned to admin', 'timestamp' => now()->subDays(1)->toDateTimeString()]
                ]),
                'assigned_at' => now()->subDays(1),
                'completed_at' => null,
                'status' => 'assigned',
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(1),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'user_id' => null,
                'task_notes' => 'Waiting for admin assignment - donor requested pickup support',
                'activity_log' => json_encode([
                    ['action' => 'Task created automatically', 'timestamp' => now()->subHours(6)->toDateTimeString()]
                ]),
                'assigned_at' => null,
                'completed_at' => null,
                'status' => 'new',
                'created_at' => now()->subHours(6),
                'updated_at' => now()->subHours(6),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'user_id' => $admins->random()->id,
                'task_notes' => 'Pickup scheduled for tomorrow at 2 PM',
                'activity_log' => json_encode([
                    ['action' => 'Task created', 'timestamp' => now()->subDays(3)->toDateTimeString()],
                    ['action' => 'Assigned to admin', 'timestamp' => now()->subDays(2)->toDateTimeString()],
                    ['action' => 'Pickup scheduled', 'timestamp' => now()->subDays(1)->toDateTimeString()]
                ]),
                'assigned_at' => now()->subDays(2),
                'completed_at' => null,
                'status' => 'in_progress',
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subDays(1),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'user_id' => $admins->random()->id,
                'task_notes' => 'Successfully delivered and confirmed by guardian',
                'activity_log' => json_encode([
                    ['action' => 'Task created', 'timestamp' => now()->subDays(5)->toDateTimeString()],
                    ['action' => 'Assigned to admin', 'timestamp' => now()->subDays(4)->toDateTimeString()],
                    ['action' => 'Delivery completed', 'timestamp' => now()->subDays(2)->toDateTimeString()],
                    ['action' => 'Guardian confirmation received', 'timestamp' => now()->subDays(1)->toDateTimeString()]
                ]),
                'assigned_at' => now()->subDays(4),
                'completed_at' => now()->subDays(1),
                'status' => 'completed',
                'created_at' => now()->subDays(5),
                'updated_at' => now()->subDays(1),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'user_id' => $admins->random()->id,
                'task_notes' => 'Cancelled due to donor unavailability',
                'activity_log' => json_encode([
                    ['action' => 'Task created', 'timestamp' => now()->subDays(4)->toDateTimeString()],
                    ['action' => 'Assigned to admin', 'timestamp' => now()->subDays(3)->toDateTimeString()],
                    ['action' => 'Cancelled by admin', 'timestamp' => now()->subDays(2)->toDateTimeString()]
                ]),
                'assigned_at' => now()->subDays(3),
                'completed_at' => now()->subDays(2),
                'status' => 'cancelled',
                'created_at' => now()->subDays(4),
                'updated_at' => now()->subDays(2),
            ]
        ];
        DB::table('tasks')->insert($tasks);
    }
}
