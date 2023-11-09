<?php

namespace App\Http\Controllers\Api;

use App\Models\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

	use ApiResponse, ApiResponseMessage;


	public function login(Request $request) : object
	{

		$validate = Validator::make($request->all(), [
			'email' => 'required|email',
			'password' => 'required',
			'device_name' => 'sometimes|required'
		]);

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		$email = $request->input('email');
		$password = $request->input('password');
		$device_name = $request->input('device_name', 'webToken');

		$user = User::where('email', $email)->first();

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		if( !$user ){
			return $this->errorResponse([], $this->responseMessage('wrong_email'), 401);
		}

		if( !Hash::check($password, $user->password) ){
			return $this->errorResponse([], $this->responseMessage('wrong_password'), 401);
		}

		if( !auth()->attempt($request->only('email', 'password'), $request->remember) ){
			return $this->errorResponse([], $this->responseMessage('login_error'), 401);
		}

		if( !$user->email_verified_at ){
			return $this->errorResponse([], $this->responseMessage('user_email_not_verified'), 401);
		}
		
		$user = auth()->user();
		$token = $user->createToken($device_name)->plainTextToken;

		return $this->successResponse([
			'token' => $token,
			'token_type' => 'Bearer',
			'user' => $user
		]);

	}



	public function logout(Request $request)
	{
		$request->user()->tokens()->delete();
		return $this->successResponse([], $this->responseMessage('logout'));
	}

}