<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use App\Traits\createStorageDirectoryIfDoesNotExists;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;



class ProfileController extends Controller
{

	use ApiResponse, 
			ApiResponseMessage,
			createStorageDirectoryIfDoesNotExists;


	/**
	 * Display the specified resource.
	 */
	public function index() : object
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
	public function update(Request $request, int $id) : object
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


	/**
	 * thumbnailProfile
	 */
	public function thumbnailProfile(Request $request, int $id)
	{

		$user = auth()->user();

		if( $id !== $user->id ){
			return $this->errorResponse([], $this->responseMessage('wrong_user_id'));
		}

		if( $request->thumbnail ){

			$store_directory = 'public/profiles';
			if( !$this->storageDirectoryExists($store_directory) ){
				$this->createStorageDirectory($store_directory);
			}

			$image_name = "$id.webp";

			$img = Image::make($request->file('thumbnail'))
							->fit(600, 600)
							->save("storage/profiles/$image_name", 60);
			
			if( $img ){
				$user->update(['thumbnail' => $image_name]);
				return $this->successResponse($user, $this->responseMessage('thumbnail_updated'));
			}
		}
		
		return $this->errorResponse([], $this->responseMessage('thumbnail_updated_error'), 422);

	}

}
