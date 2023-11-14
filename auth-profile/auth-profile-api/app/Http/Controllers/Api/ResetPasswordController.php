<?php

namespace App\Http\Controllers\Api;

use App\Models\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;


class ResetPasswordController extends Controller
{

	use ApiResponse, ApiResponseMessage;


	/**
	 * Recuperación de contraseña
	 */
	public function sendResetPasswordEmail(Request $request)
	{
		$validate = Validator::make($request->all(), [
			'email' => 'required|email'
		]);

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		$status = Password::sendResetLink(
			$request->only('email')
		);

		if( $status === Password::RESET_LINK_SENT ){
			return $this->successResponse([], __($status));
		}else{
			return $this->errorResponse([], __($status), 422);
		}

	}


	public function resetPassword(Request $request)
	{

		$validate = Validator::make($request->all(), [
			'token' => 'required',
			'email' => 'required|email',
			'password' => 'required|confirmed|min:6',
		]);

		if( $validate->fails() ){
			return $this->errorResponse($validate->errors(), 'Error', 422);
		}

		$status = Password::reset(
			$request->only('email', 'password', 'password_confirmation', 'token'),
			
			function (User $user, string $password) {
				$user->forceFill([
					'password' => Hash::make($password)
				])->setRememberToken(Str::random(60));

				$user->save();

				event(new PasswordReset($user));
			}
		);

		if( $status === Password::PASSWORD_RESET ){
			return $this->successResponse([], __($status));
		}else{
			return $this->errorResponse([], __($status), 422);
		}

	}

}
