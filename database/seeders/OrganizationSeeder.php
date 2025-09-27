<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Organization;

class OrganizationSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Organization::create([
                'name' => "Organization {$i}",
                'logo' => null,
                'contact_email' => "org{$i}@example.com",
                'contact_phone' => "0191000000{$i}",
                'address' => "Organization {$i} Address",
                'description' => "This is a description of organization {$i}",
                'is_active' => $i % 2 === 0,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
