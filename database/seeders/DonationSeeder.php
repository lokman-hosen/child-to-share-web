<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Organization;
use App\Models\Donation;
use Illuminate\Database\Seeder;

class DonationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::whereIn('role', ['donor', 'admin'])->get();
        $categories = Category::where('is_active', true)->get();
        $organizations = Organization::where('is_active', true)->get();

        if ($users->isEmpty() || $categories->isEmpty()) {
            $this->command->error('Please seed Users and Categories first!');
            return;
        }

        $donationData = [
            [
                'title' => 'Children Story Books Collection',
                'description' => 'A collection of 10 gently used children story books including fairy tales and educational stories. Perfect for kids aged 5-8 years.',
                'item_condition' => 'Good',
                'category_id' => $categories->where('name', 'Books')->first()->id,
                //'latitude' => 40.7128,
                //'longitude' => -74.0060,
                'auto_tags' => ['books', 'stories', 'children', 'educational'],
                'status' => 'available',
            ],
            [
                'title' => 'Educational Toys Set',
                'description' => 'Complete set of building blocks and puzzles. Helps develop cognitive skills and creativity. All pieces are clean and in excellent condition.',
                'item_condition' => 'Excellent',
                'category_id' => $categories->where('name', 'Toys')->first()->id,
                //'latitude' => 34.0522,
                //'longitude' => -118.2437,
                'auto_tags' => ['toys', 'educational', 'building blocks', 'puzzles'],
                'status' => 'available',
            ],
            [
                'title' => 'Winter Clothing Bundle',
                'description' => 'Warm winter clothes including jackets, sweaters, and gloves for children aged 6-10 years. All items are clean and gently used.',
                'item_condition' => 'Good',
                'category_id' => $categories->where('name', 'Clothes')->first()->id,
                //'latitude' => 41.8781,
                //'longitude' => -87.6298,
                'auto_tags' => ['clothes', 'winter', 'jackets', 'warm'],
                'status' => 'available',
            ],
            [
                'title' => 'School Backpack with Supplies',
                'description' => 'Blue school backpack filled with notebooks, pencils, erasers, and coloring materials. Perfect for elementary school students.',
                'item_condition' => 'Like New',
                'category_id' => $categories->where('name', 'School Supplies')->first()->id,
                //'latitude' => 29.7604,
                //'longitude' => -95.3698,
                'auto_tags' => ['school', 'backpack', 'supplies', 'stationery'],
                'status' => 'reserved',
            ],
            [
                'title' => 'Soccer Ball and Sports Gear',
                'description' => 'Professional soccer ball with pump and sports water bottle. Great for outdoor activities and sports training.',
                'item_condition' => 'Excellent',
                'category_id' => $categories->where('name', 'Sports Equipment')->first()->id,
                //'latitude' => 33.4484,
                //'longitude' => -112.0740,
                'auto_tags' => ['sports', 'soccer', 'outdoor', 'fitness'],
                'status' => 'available',
            ]
        ];

        foreach ($donationData as $data) {
            Donation::create(array_merge($data, [
                'user_id' => $users->random()->id,
                'organization_id' => $organizations->isNotEmpty() ? $organizations->random()->id : null,
                'nsfw_flagged' => false,
            ]));
        }
    }
}