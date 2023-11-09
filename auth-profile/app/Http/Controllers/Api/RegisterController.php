<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;


class RegisterController extends Controller
{

	use ApiResponse, ApiResponseMessage;

	/**
	 * store()
	 * 
	 * Handles the registration process. 
	 * It validates the user input, creates a new user if 
	 * the validation passes, and returns a success response 
	 * with the user data.
	 * 
	 * name
	 * firstname
	 * lastname
	 * email
	 * password
	 * password_confirmation
	 * 
	 */
	public function store(Request $request) : object
	{

		$validate = Validator::make($request->all(), [
			'name' => 'required|unique:users|max:20',
			'firstname' => 'required|min:3|max:30',
			'lastname' => 'required|min:3|max:30',
			'email' => 'required|unique:users|email|max:60',
			'password' => 'required|confirmed|min:6',
			'device_name' => 'sometimes|required'
		]);

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		$device_name = $request->input('device_name', 'webToken');

		if( $request->name ){
			$request->request->add(['name' => Str::slug($request->name)]);
		}

		$user = User::create([
			'name' => $request->name,
			'firstname' => $request->firstname,
			'lastname' => $request->lastname,
			'email' => $request->email,
			'password' => Hash::make($request->password)
		]);

		$token = $user->createToken($device_name)->plainTextToken;

		event(new Registered($user));

		return $this->successResponse([
			'token' => $token,
			'token_type' => 'Bearer',
			'user' => $user
		], 
			$this->responseMessage('register_success'),
			201
		);
	}

}
