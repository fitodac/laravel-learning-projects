<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


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

		$remember_token = $request->input('remember') ? Str::random(10) : null;
		$device_name = $request->input('device_name', 'webToken');

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		if( !auth()->attempt($request->only('email', 'password'), $request->remember) ){
			return $this->errorResponse([], $this->responseMessage('login_error'), 401);
		}

		$user = auth()->user();

		if( !$user->email_verified_at ){
			return $this->errorResponse([], $this->responseMessage('user_email_not_verified'), 401);
		}
		
		$user->update(['remember_token' => $remember_token]);
		$token = $user->createToken($device_name)->plainTextToken;

		/**
		 * Si el usuario tiene un thumbnail ID, se creará 
		 * una imagen mas pequeña "thumbnail200x200"
		 */
		if( $user->thumbnail ){
			$mask = Image::canvas(150, 150)
								->circle(150, 75, 75, function($draw){
									$draw->background('#FFCC00');
								});
			
			$minipic = Image::make("storage/profiles/$user->id.webp")
									->fit(150,150)
									->mask($mask)
									->save("storage/profiles/$user->id-100.webp", 100);
			
			if( $minipic ){
				$user['thumbnail100x100'] = "storage/profiles/$user->id-100.webp";
			}
		}

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