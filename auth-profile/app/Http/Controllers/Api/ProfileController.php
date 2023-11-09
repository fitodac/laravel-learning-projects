<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;


class ProfileController extends Controller
{

	use ApiResponse, ApiResponseMessage;

	/**
	 * Display the specified resource.
	 */
	public function index()
	{
		$user = auth()->user();
		$user->tokens;

		return $this->successResponse($user);
	}



	/**
	 * update()
	 * 
	 * Updates the authenticated user's profile based on 
	 * the provided request data. It performs validation, 
	 * checks if the user ID matches the authenticated 
	 * user's ID, and returns a success response with 
	 * the updated user data.
	 */
	public function update(Request $request, int $id)
	{
		if( 'PATCH' !== $request->method() ){
			return $this->errorResponse([], $this->responseMessage('405'), 405);
		}

		$user = auth()->user();

		if( $id !== $user->id ){
			return $this->errorResponse([], $this->responseMessage('wrong_user_id'));
		}

		if( empty($request->all()) ){
			return $this->successResponse($user, $this->responseMessage('profile_nothing_has_changed'), 400);
		}

		$validate = Validator::make($request->all(), [
			'name' => 'unique:users,name,'.$id.'max:30',
			'firstname' => 'min:3|max:30',
			'lastname' => 'min:3|max:30',
			'email' => 'unique:users,email,'.$id.'|email|max:60',
			'password' => 'confirmed|min:6'
		]);

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		if( $request->name ){
			$request->request->add(['name' => Str::slug($request->name)]);
		}

		$user->update($request->all());

		return $this->successResponse($user, $this->responseMessage('profile_updated'));
	}

}
