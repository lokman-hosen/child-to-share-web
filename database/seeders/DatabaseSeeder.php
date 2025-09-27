<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            OrganizationSeeder::class,
            DonorSeeder::class,
            WisherSeeder::class,
            LeaderSeeder::class,
            CatalogSeeder::class,
            DonationSeeder::class,
            WishSeeder::class,
            FulfillmentSeeder::class,
            MessageSeeder::class,
            ModerationLogSeeder::class,
            NotificationSeeder::class,
            TaskSeeder::class,
        ]);
    }
}
