<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class LoginTest extends TestCase
{
    // Login with valid email and password
	public function test_login_with_valid_email_and_password()
	{
		$user = User::factory()->create([
			'email' => 'test@example.com',
			'password' => bcrypt('password')
		]);

		$response = $this->postJson('/login', [
			'email' => 'test@example.com',
			'password' => 'password'
		]);

		$response->assertStatus(200)
		->assertJsonStructure([
			'success',
			'code',
			'message',
			'data' => [
				'token',
				'token_type',
				'user'
			]
		]);
	}
}
