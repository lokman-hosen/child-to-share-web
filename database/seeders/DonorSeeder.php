<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Donor;

class DonorSeeder extends Seeder
{
    public function run(): void
    {
        $donors = User::where('user_type', 'donor')->get();

        foreach ($donors as $index => $user) {
            Donor::create([
                'name' => $user->name,
                'user_id' => $user->id,
                'dob' => now()->subYears(25 + $index),
                'address' => "Donor Address {$index}",
                'organization' => "Donor Org {$index}",
                'gender' => $index % 2 === 0 ? 'male' : 'female',
            ]);
        }
    }
}
