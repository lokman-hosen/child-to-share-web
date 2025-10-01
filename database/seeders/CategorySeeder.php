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
            ],
            [
                'name' => 'Baby Items',
                'slug' => Str::slug('Baby Items'),
                'icon' => null,
                'description' => 'Diapers, baby clothes, bottles, pacifiers, and other essentials for infants and toddlers.',
                'order' => 6,
            ],
            [
                'name' => 'Shoes',
                'slug' => Str::slug('Shoes'),
                'icon' => null,
                'description' => 'Children shoes, sandals, sneakers, and footwear for various occasions and seasons.',
                'order' => 7,
            ],
            [
                'name' => 'Art & Craft',
                'slug' => Str::slug('Art & Craft'),
                'icon' => null,
                'description' => 'Coloring books, crayons, paints, craft kits, and creative supplies for children.',
                'order' => 8,
            ],
            [
                'name' => 'Educational Kits',
                'slug' => Str::slug('Educational Kits'),
                'icon' => null,
                'description' => 'STEM kits, science experiments, learning games, and educational activity sets.',
                'order' => 9,
            ],
            [
                'name' => 'Winter Gear',
                'slug' => Str::slug('Winter Gear'),
                'icon' => null,
                'description' => 'Winter coats, gloves, hats, scarves, and cold weather accessories for children.',
                'order' => 10,
            ],
            [
                'name' => 'Musical Instruments',
                'slug' => Str::slug('Musical Instruments'),
                'icon' => null,
                'description' => 'Child-sized musical instruments like keyboards, guitars, drums, and recorders.',
                'order' => 11,
            ],
            [
                'name' => 'Electronics',
                'slug' => Str::slug('Electronics'),
                'icon' => null,
                'description' => 'Educational tablets, calculators, children cameras, and age-appropriate electronic devices.',
                'order' => 12,
            ],
            [
                'name' => 'Furniture',
                'slug' => Str::slug('Furniture'),
                'icon' => null,
                'description' => 'Children furniture like study desks, chairs, bookshelves, and storage units.',
                'order' => 13,
            ],
            [
                'name' => 'Hygiene Products',
                'slug' => Str::slug('Hygiene Products'),
                'icon' => null,
                'description' => 'Child-friendly toiletries, toothbrushes, soap, shampoo, and personal care items.',
                'order' => 14,
            ],
            [
                'name' => 'Party Supplies',
                'slug' => Str::slug('Party Supplies'),
                'icon' => null,
                'description' => 'Birthday decorations, party favors, celebration items, and festive materials.',
                'order' => 15,
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}