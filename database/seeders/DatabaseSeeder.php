<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = [["role" => "admin", "amount" => 1], ["role" => "user", "amount" => 10]];
        foreach ($roles as $user) {
            for ($i = 0; $i < $user["amount"]; $i++) {
                \App\Models\User::factory()->create([
                    'name' => fake()->name(),
                    'email' => $user["role"] . ($i < 1 ? '' : $i + 1) . '@' . $user["role"] . '.com',
                    "password" => Hash::make($user["role"] . ($i < 1 ? '' : $i + 1)),
                    "role" => $user["role"],
                ]);
            }
        }
    }
}
