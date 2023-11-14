<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;


class VerifyAccountController extends Controller
{

	use ApiResponse, ApiResponseMessage;


	public function verifyAccount(Request $request, int $id, string $hash)
	{

		$user = auth()->user();

		if( !$user ){
			return $this->errorResponse([], $this->responseMessage('unauthorized'), 401);
		}

		if( 
			!hash_equals(sha1($user->getEmailForVerification()), (string) $hash) 
			or !hash_equals( (string) $user->id, (string) $id )
		){
			return $this->errorResponse([], $this->responseMessage('unauthorized'), 401);
		}


		if( $user->hasVerifiedEmail() ){
			return $this->successResponse([], $this->responseMessage('email_already_been_verified'));
		}

		$user->markEmailAsVerified();
		$user->tokens()->delete();

		return $this->successResponse([], $this->responseMessage('email_verified'));
	}



	public function resendVerificationEmail(Request $request)
	{
		$request->user()->sendEmailVerificationNotification();
		return $this->successResponse([], $this->responseMessage('email_verification_sent'));
	}

}
