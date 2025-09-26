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
                'phone' => "0191000000{$i}",
                'email' => "org{$i}@example.com",
                'address' => "Organization {$i} Address",
                'description' => "This is a description of organization {$i}",
            ]);
        }
    }
}
