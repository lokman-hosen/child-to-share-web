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
        $sAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@example.com',
            'phone' => '01710000001',
            'dob' => now()->subYears(10)->format('Y-m-d'),
            'gender' => 'male',
            'password' => Hash::make('password'),
            'is_verified' => true,
            'is_active' => true,
            'email_verified_at' => now(),
            'phone_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $sAdmin->roles()->attach([1]);

        // Admin
        $admin = User::create([
            'name' => "Admin User",
            'email' => "admin@example.com",
            'phone' => "01723300005",
            'dob' => now()->subYears(11)->format('Y-m-d'),
            'gender' => 'male',
            'password' => Hash::make('password'),
            'is_verified' => true,
            'is_active' => true,
            'email_verified_at' => now(),
            'phone_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $admin->roles()->attach([2]);

        // Donors
        $donor = User::create([
                'name' => "Donor and Wisher User ",
                'email' => "donor@example.com",
                'phone' => "01720000003",
                'dob' => now()->subYears(11)->format('Y-m-d'),
                'gender' => 'male',
                'password' => Hash::make('password'),
                'is_verified' => true,
                'is_active' => true,
                'email_verified_at' => now(),
                'phone_verified_at' => now(),
                'latitude' => 34.0522,
                'longitude' => -118.2437,
                'created_at' => now(),
                'updated_at' => now(),
        ]);
        $donor->roles()->attach([3,4]);
    }
}
