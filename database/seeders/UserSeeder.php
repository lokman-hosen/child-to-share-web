<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Super Admin
        User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@example.com',
            'mobile' => '01710000001',
            'user_type' => 'super_admin',
            'password' => Hash::make('password'),
        ]);

        // Admin
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'mobile' => '01710000002',
            'user_type' => 'admin',
            'password' => Hash::make('password'),
        ]);

        // Donors
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Donor User {$i}",
                'email' => "donor{$i}@example.com",
                'mobile' => "0172000000{$i}",
                'user_type' => 'donor',
                'password' => Hash::make('password'),
            ]);
        }

        // Wishers
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Wisher User {$i}",
                'email' => "wisher{$i}@example.com",
                'mobile' => "0173000000{$i}",
                'user_type' => 'wisher',
                'password' => Hash::make('password'),
            ]);
        }

        // Leaders
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Leader User {$i}",
                'email' => "leader{$i}@example.com",
                'mobile' => "0174000000{$i}",
                'user_type' => 'leader',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
