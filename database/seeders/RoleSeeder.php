<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'slug' => Str::slug('super_admin'),
                'description' => null,
            ],
            [
                'name' => 'Admin',
                'slug' => Str::slug('admin'),
                'description' => null,
            ],
            [
                'name' => 'Donor',
                'slug' => Str::slug('donor'),
                'description' => null,
            ],
            [
                'name' => 'Wisher',
                'slug' => Str::slug('wisher'),
                'description' => null,
            ],
            [
                'name' => 'Community leader',
                'slug' => Str::slug('community_leader'),
                'description' => null,
            ],
        ];
        DB::table('roles')->insert($roles);
    }
}
