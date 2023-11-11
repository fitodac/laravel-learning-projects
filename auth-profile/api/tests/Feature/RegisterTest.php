<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

class RegisterTest extends TestCase
{

	use RefreshDatabase;

	/**
	 * A basic feature test example.
	 */
	public function test_users_can_register()
	{
		$response = $this->json('POST', '/api/register', [
			'name' => fake()->name(),
			'firstname' => fake()->firstname(),
			'lastname' => fake()->lastname(),
			'email' => fake()->unique()->safeEmail(),
			'email_verified_at' => now(),
			'password' => bcrypt('password123'),
			'phone' => fake()->phoneNumber(),
			'remember_token' => Str::random(10)
		]);

		$response->assertStatus(201);
	}

}
