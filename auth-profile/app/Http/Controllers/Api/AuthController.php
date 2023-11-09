<?php

namespace App\Http\Controllers\Api;

use App\Models\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


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
		$remember_token = $request->input('remember') ? Str::random(10) : null;
		$device_name = $request->input('device_name', 'webToken');

		$user = User::where('email', $email)->first();

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		if( !auth()->attempt($request->only('email', 'password'), $request->remember) ){
			return $this->errorResponse([], $this->responseMessage('login_error'), 401);
		}

		if( !$user->email_verified_at ){
			return $this->errorResponse([], $this->responseMessage('user_email_not_verified'), 401);
		}
		
		$user = auth()->user();
		$user->remember_token = $remember_token;
		$user->save();

		$token = $user->createToken($device_name)->plainTextToken;

		return $this->successResponse([
			'token' => $token,
			'token_type' => 'Bearer',
			'remember_token' => $remember_token,
			'user' => $user
		]);

	}



	public function logout(Request $request)
	{
		$request->user()->tokens()->delete();
		return $this->successResponse([], $this->responseMessage('logout'));
	}

}