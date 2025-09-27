<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Leader;

class LeaderSeeder extends Seeder
{
    public function run(): void
    {
        $leaders = User::where('role', 'leader')->get();

        foreach ($leaders as $index => $user) {
            Leader::create([
                'name' => $user->name,
                'user_id' => $user->id,
                'dob' => now()->subYears(30 + $index),
                'address' => "Leader Address {$index}",
                'organization' => "Leader Org {$index}",
                'gender' => $index % 2 === 0 ? 'male' : 'female',
            ]);
        }
    }
}
