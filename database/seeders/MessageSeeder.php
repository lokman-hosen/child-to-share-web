<?php

namespace Database\Seeders;

use App\Models\Fulfilment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing fulfillments and users
        $fulfillments = Fulfilment::all();
        $users = User::all();

        if ($fulfillments->isEmpty() || $users->isEmpty()) {
            $this->command->error('Please seed Fulfillments and Users first!');
            return;
        }

        $messages = [
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'sender_id' => $users->random()->id,
                'receiver_id' => $users->where('id', '!=', function($query) use ($users) {
                    return $users->random()->id;
                })->random()->id,
                'message' => 'Hello! I have the item you requested. When would be a good time for pickup?',
                'is_read' => false,
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subDays(3),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'sender_id' => $users->random()->id,
                'receiver_id' => $users->where('id', '!=', function($query) use ($users) {
                    return $users->random()->id;
                })->random()->id,
                'message' => 'Thank you so much for your generosity! My child will be very happy with this gift.',
                'is_read' => true,
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'sender_id' => $users->random()->id,
                'receiver_id' => $users->where('id', '!=', function($query) use ($users) {
                    return $users->random()->id;
                })->random()->id,
                'message' => 'I can meet you at the community center tomorrow afternoon around 3 PM. Does that work for you?',
                'is_read' => true,
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subDays(1),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'sender_id' => $users->random()->id,
                'receiver_id' => $users->where('id', '!=', function($query) use ($users) {
                    return $users->random()->id;
                })->random()->id,
                'message' => 'Yes, 3 PM at the community center works perfectly for me. See you then!',
                'is_read' => false,
                'created_at' => now()->subHours(12),
                'updated_at' => now()->subHours(12),
            ],
            [
                'fulfilment_id' => $fulfillments->random()->id,
                'sender_id' => $users->random()->id,
                'receiver_id' => $users->where('id', '!=', function($query) use ($users) {
                    return $users->random()->id;
                })->random()->id,
                'message' => 'The item has been delivered. Please confirm when you receive it. Thank you!',
                'is_read' => false,
                'created_at' => now()->subHours(2),
                'updated_at' => now()->subHours(2),
            ]
        ];

        DB::table('messages')->insert($messages);
    }
}
