<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Books',
                'slug' => Str::slug('Books'),
                'icon' => null,
                'description' => 'Educational books, storybooks, textbooks, and reading materials for children of all ages.',
                'order' => 1,
            ],
            [
                'name' => 'Toys',
                'slug' => Str::slug('Toys'),
                'icon' => null,
                'description' => 'Educational toys, board games, stuffed animals, and play items for children.',
                'order' => 2,
            ],
            [
                'name' => 'Clothes',
                'slug' => Str::slug('Clothes'),
                'icon' => null,
                'description' => 'Children clothing items including shirts, pants, dresses, jackets, and seasonal wear.',
                'order' => 3,
            ],
            [
                'name' => 'School Supplies',
                'slug' => Str::slug('School Supplies'),
                'icon' => null,
                'description' => 'Backpacks, notebooks, pencils, pens, art supplies, and other educational materials.',
                'order' => 4,
            ],
            [
                'name' => 'Sports Equipment',
                'slug' => Str::slug('Sports Equipment'),
                'icon' => null,
                'description' => 'Sports gear, balls, bicycles, skateboards, and outdoor play equipment for children.',
                'order' => 5,
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}