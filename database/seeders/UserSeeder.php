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
            'role' => 'super_admin',
            'password' => Hash::make('password'),
            'is_verified' => true,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Admin
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'mobile' => '01710000002',
            'role' => 'admin',
            'is_verified' => true,
            'is_active' => true,
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Donors
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Donor User {$i}",
                'email' => "donor{$i}@example.com",
                'mobile' => "0172000000{$i}",
                'role' => 'donor',
                'password' => Hash::make('password'),
                'is_verified' => $i % 2 === 0,
                'is_active' => $i % 2 === 0,
                'latitude' => 34.0522,
                'longitude' => -118.2437,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Wishers
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Wisher User {$i}",
                'email' => "wisher{$i}@example.com",
                'mobile' => "0173000000{$i}",
                'role' => 'wisher',
                'password' => Hash::make('password'),
                'is_verified' => $i % 2 === 0,
                'is_active' => $i % 2 === 0,
                'latitude' => 34.0522,
                'longitude' => -118.2437,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Leaders
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "Leader User {$i}",
                'email' => "leader{$i}@example.com",
                'mobile' => "0174000000{$i}",
                'role' => 'leader',
                'latitude' => 34.0522,
                'longitude' => -118.2437,
                'password' => Hash::make('password'),
                'is_verified' => false,
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
