<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Wisher;

class WisherSeeder extends Seeder
{
    public function run(): void
    {
        $wishers = User::where('role', 'wisher')->get();

        foreach ($wishers as $index => $user) {
            Wisher::create([
                'name' => $user->name,
                'user_id' => $user->id,
                'guardian_name' => "Guardian {$index}",
                'guardian_phone' => "0181000000{$index}",
                'relationship' => "Father",
                'dob' => now()->subYears(15 + $index),
                'gender' => $index % 2 === 0 ? 'male' : 'female',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
