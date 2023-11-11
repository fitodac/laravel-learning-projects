<?php

namespace Tests\Unit;

use App\Http\Controllers\Api\RegisterController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\TestCase;


class RegisterTest extends TestCase
{
	
	private function userData()
	{
		return [
			'name' => fake()->name(),
			'firstname' => fake()->firstname(),
			'lastname' => fake()->lastname(),
			'email' => fake()->unique()->safeEmail(),
			'email_verified_at' => now(),
			'password' => 'password123',
			'password_confirmation' => 'password123',
			'phone' => fake()->phoneNumber(),
			'remember_token' => Str::random(10)
		];
	}


	// The store method should hash the password before saving the user.
	// public function test_store_should_hash_password()
	// {
	// 	$request = new Request($this->userData());

	// 	$controller = new RegisterController();
	// 	$response = $controller->store($request);

	// 	$this->assertTrue(Hash::check($this->userData()['password'], $response->password));
	// }


	// The store method should return the created user.
	// public function test_store_should_return_created_user()
	// {
	// 	$request = new Request($this->userData());

	// 	$controller = new RegisterController();
	// 	$response = $controller->store($request);

	// 	$this->assertEquals($response, User::find($response->id));
	// }


	// The store method should return an error if the name is not provided.
	// public function test_store_should_return_error_if_name_not_provided()
	// {
	// 	$data = $this->userData();
	// 	$data['name'] = null;

	// 	$request = new Request($data);

	// 	$controller = new RegisterController();
  //   $response = $controller->store($request);

  //   $this->assertEquals(422, $response->getStatusCode());
	// }


	// The store method should return an error if the email is not provided.
	// public function test_store_should_return_error_if_email_not_provided()
	// {
	// 	$data = $this->userData();
	// 	$data['email'] = null;

	// 	$request = new Request($data);

	// 	$controller = new RegisterController();
	// 	$response = $controller->store($request);

	// 	$this->assertEquals(422, $response->getStatusCode());
	// }


	// The store method should return an error if the password is not provided.
	// public function test_store_should_return_error_if_password_not_provided()
	// {
	// 	$data = $this->userData();
	// 	$data['password'] = null;

	// 	$request = new Request($data);

	// 	$controller = new RegisterController();
	// 	$response = $controller->store($request);

	// 	$this->assertEquals(422, $response->getStatusCode());
	// }

}
