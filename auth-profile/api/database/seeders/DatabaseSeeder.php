<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
	public function run(): void
	{
		
		User::create([
			'name' => 'fitodac',
			'firstname' => 'fito',
			'lastname' => 'dac',
			'email' => 'fitodac@gmail.com',
			'phone' => '+1 5555 348 765',
			'email_verified_at' => now(),
			'password' => bcrypt('123123'),
			'remember_token' => Str::random(10)
		]);

		User::factory(10)->create();

		// \App\Models\User::factory()->create([
		//     'name' => 'Test User',
		//     'email' => 'test@example.com',
		// ]);
	}
}
