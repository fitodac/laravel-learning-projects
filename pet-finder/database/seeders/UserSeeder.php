<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		User::create([
			'name' => 'fitodac',
			'firstname' => 'Fito',
			'lastname' => 'Dac',
			'email' => 'fitodac@gmail.com',
			'email_verified_at' => date('Y-m-d H:i:s'),
			'password' => bcrypt('123123'),
			'whatsapp' => fake()->phoneNumber(),
			'instagram_user' => fake()->userName(),
			'facebook_user' => fake()->userName(),
			'province_id' => 9,
			'city_id' => '1878',
			'remember_token' => Str::random(10),
		]);

		User::factory(30)->create();
	}
}
