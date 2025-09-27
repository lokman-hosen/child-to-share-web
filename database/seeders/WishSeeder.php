<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing users, categories, and organizations
        $users = User::whereIn('role', ['wisher', 'admin'])->get();
        $categories = Category::where('is_active', true)->get();
        $organizations = Organization::where('is_active', true)->get();

        if ($users->isEmpty() || $categories->isEmpty()) {
            $this->command->error('Please seed Users and Categories first!');
            return;
        }

        $wishes = [
            [
                'title' => 'Science Encyclopedia for Kids',
                'description' => 'Looking for a science encyclopedia suitable for a 10-year-old. My son is very curious about space and animals.',
                'age_range' => '8-12',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Books')->first()->id,
                'auto_tags' => json_encode(['books', 'science', 'educational', 'children']),
                'nsfw_flagged' => false,
                'status' => 'pending',
                'fulfilled_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Building Blocks Set',
                'description' => 'My daughter loves constructing things. Would love a building blocks set to help develop her creativity.',
                'age_range' => '5-8',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Toys')->first()->id,
                'auto_tags' => json_encode(['toys', 'building blocks', 'creative', 'educational']),
                'nsfw_flagged' => false,
                'status' => 'approved',
                'fulfilled_at' => now(),
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subDays(3),
            ],
            [
                'title' => 'Winter Jacket for Boy',
                'description' => 'Need a warm winter jacket for my 7-year-old son. Size 6-8 would be perfect.',
                'age_range' => '6-8',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Clothes')->first()->id,
                'auto_tags' => json_encode(['clothes', 'winter', 'jacket', 'boy']),
                'nsfw_flagged' => false,
                'status' => 'pending',
                'fulfilled_at' => now(),
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subDays(1),
            ],
            [
                'title' => 'School Backpack and Supplies',
                'description' => 'Starting school next month and need a backpack with basic supplies like notebooks and pencils.',
                'age_range' => '9-11',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'School Supplies')->first()->id,
                'auto_tags' => json_encode(['school', 'backpack', 'supplies', 'stationery']),
                'nsfw_flagged' => false,
                'status' => 'approved',
                'fulfilled_at' => now(),
                'created_at' => now()->subDays(7),
                'updated_at' => now()->subDays(7),
            ],
            [
                'title' => 'Soccer Ball for Community Games',
                'description' => 'Looking for a soccer ball for our community youth games. Would help keep kids active and engaged.',
                'age_range' => '10-14',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Sports Equipment')->first()->id,
                'auto_tags' => json_encode(['sports', 'soccer', 'community', 'outdoor']),
                'nsfw_flagged' => false,
                'status' => 'fulfilled',
                'fulfilled_at' => now(),
                'created_at' => now()->subDays(14),
                'updated_at' => now()->subDays(2),
            ]
        ];

        DB::table('wishes')->insert($wishes);
    }
}