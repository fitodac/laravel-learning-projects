<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;
use Illuminate\Auth\AuthenticationException;
use Throwable;

class Handler extends ExceptionHandler
{

	use ApiResponse, ApiResponseMessage;

	/**
	 * The list of the inputs that are never flashed to the session on validation exceptions.
	 *
	 * @var array<int, string>
	 */
	protected $dontFlash = [
		'current_password',
		'password',
		'password_confirmation',
	];

	/**
	 * Register the exception handling callbacks for the application.
	 */
	public function register(): void
	{
		$this->reportable(function (Throwable $e) {
			//
		});
	}

	public function render($request, Throwable $exception)
	{
		if ($exception instanceof MethodNotAllowedHttpException) {
			return $this->errorResponse([], $this->responseMessage('route_method_not_allowed'), 405);
		}

		return parent::render($request, $exception);
	}

	public function unauthenticated($request, AuthenticationException $exception)
	{
		return $this->errorResponse([], $this->responseMessage('unauthorized'), 401);
	}
}
