<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing users, categories, and organizations
        $users = User::whereIn('role', ['donor', 'admin'])->get();
        $categories = Category::where('is_active', true)->get();
        $organizations = Organization::where('is_active', true)->get();

        if ($users->isEmpty() || $categories->isEmpty()) {
            $this->command->error('Please seed Users and Categories first!');
            return;
        }

        $donations = [
            [
                'title' => 'Children Story Books Collection',
                'description' => 'A collection of 10 gently used children story books including fairy tales and educational stories. Perfect for kids aged 5-8 years.',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Books')->first()->id,
                'auto_tags' => json_encode(['books', 'stories', 'children', 'educational']), // Fixed: added json_encode
                'nsfw_flagged' => false,
                'status' => 'available',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Educational Toys Set',
                'description' => 'Complete set of building blocks and puzzles. Helps develop cognitive skills and creativity. All pieces are clean and in excellent condition.',
                'item_condition' => 'Excellent',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Toys')->first()->id,
                'auto_tags' => json_encode(['toys', 'educational', 'building blocks', 'puzzles']), // Fixed: added json_encode
                'nsfw_flagged' => false,
                'status' => 'available',
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'title' => 'Winter Clothing Bundle',
                'description' => 'Warm winter clothes including jackets, sweaters, and gloves for children aged 6-10 years. All items are clean and gently used.',
                'item_condition' => 'Good',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Clothes')->first()->id,
                'auto_tags' => json_encode(['clothes', 'winter', 'jackets', 'warm']), // Fixed: added json_encode
                'nsfw_flagged' => false,
                'status' => 'available',
                'created_at' => now()->subDays(5),
                'updated_at' => now()->subDays(5),
            ],
            [
                'title' => 'School Backpack with Supplies',
                'description' => 'Blue school backpack filled with notebooks, pencils, erasers, and coloring materials. Perfect for elementary school students.',
                'item_condition' => 'Like New',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'School Supplies')->first()->id,
                'auto_tags' => json_encode(['school', 'backpack', 'supplies', 'stationery']), // Fixed: added json_encode
                'nsfw_flagged' => false,
                'status' => 'reserved',
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subDays(1),
            ],
            [
                'title' => 'Soccer Ball and Sports Gear',
                'description' => 'Professional soccer ball with pump and sports water bottle. Great for outdoor activities and sports training.',
                'item_condition' => 'Excellent',
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'category_id' => $categories->where('name', 'Sports Equipment')->first()->id,
                'auto_tags' => json_encode(['sports', 'soccer', 'outdoor', 'fitness']), // Fixed: added json_encode
                'nsfw_flagged' => false,
                'status' => 'available',
                'created_at' => now()->subHours(6),
                'updated_at' => now()->subHours(6),
            ]
        ];

        DB::table('donations')->insert($donations);
    }
}