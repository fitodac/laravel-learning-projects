<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Foundation\Auth\EmailVerificationRequest;


class VerifyAccountController extends Controller
{

	use ApiResponse, ApiResponseMessage;


	public function verifyAccount(EmailVerificationRequest $request)
	{

		if( auth()->user()->hasVerifiedEmail() ){
			return $this->successResponse([], $this->responseMessage('email_already_been_verified'));
		}

		$request->fulfill();
		return $this->successResponse([], $this->responseMessage('email_verified'));
	}



	public function resendVerificationEmail(Request $request)
	{
		$request->user()->sendEmailVerificationNotification();
		return $this->successResponse([], $this->responseMessage('email_verification_sent'));
	}

}
