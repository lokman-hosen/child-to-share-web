<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing categories
        $categories = Category::where('is_active', true)->get();

        if ($categories->isEmpty()) {
            $this->command->error('Please seed Categories first!');
            return;
        }

        $catalogs = [
            [
                'name' => 'Harry Potter Book Set',
                'description' => 'Complete collection of Harry Potter books for young readers',
                'category_id' => $categories->where('name', 'Books')->first()->id,
                'age_range' => '10-15',
                'image' => 'harry-potter-set.jpg',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'LEGO Building Blocks',
                'description' => 'Educational LEGO blocks for creative construction',
                'category_id' => $categories->where('name', 'Toys')->first()->id,
                'age_range' => '6-12',
                'image' => 'lego-blocks.jpg',
                'is_active' => true,
                'created_at' => now()->subDays(2),
                'updated_at' => now()->subDays(2),
            ],
            [
                'name' => 'Winter Jacket - Blue',
                'description' => 'Warm winter jacket suitable for cold weather',
                'category_id' => $categories->where('name', 'Clothes')->first()->id,
                'age_range' => '8-10',
                'image' => 'winter-jacket-blue.jpg',
                'is_active' => true,
                'created_at' => now()->subDays(5),
                'updated_at' => now()->subDays(5),
            ],
            [
                'name' => 'School Backpack with Supplies',
                'description' => 'Complete school backpack set with notebooks and pencils',
                'category_id' => $categories->where('name', 'School Supplies')->first()->id,
                'age_range' => '7-12',
                'image' => 'school-backpack.jpg',
                'is_active' => true,
                'created_at' => now()->subDays(3),
                'updated_at' => now()->subDays(3),
            ],
            [
                'name' => 'Soccer Ball - Size 5',
                'description' => 'Professional soccer ball for outdoor sports',
                'category_id' => $categories->where('name', 'Sports Equipment')->first()->id,
                'age_range' => '9-14',
                'image' => 'soccer-ball.jpg',
                'is_active' => true,
                'created_at' => now()->subDays(1),
                'updated_at' => now()->subDays(1),
            ]
        ];

        DB::table('catalogs')->insert($catalogs);
    }
}