<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		User::create([
			'username' => 'fitodac',
			'name' => 'Fito',
			'lastname' => 'Dac',
			'email' => 'fitodac@gmail.com',
			'email_verified_at' => date('Y-m-d H:i:s'),
			'password' => bcrypt('123123')
		]);

		User::factory(200)->create();

	}
}
