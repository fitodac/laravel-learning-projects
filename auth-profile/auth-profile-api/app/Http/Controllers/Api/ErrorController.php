<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Traits\ApiResponseMessage;

class ErrorController extends Controller
{

	use ApiResponse, ApiResponseMessage;

	public function index()
	{
		return $this->errorResponse([], $this->responseMessage('unauthorized'), 561);
	}

	public function error404()
	{
		return $this->errorResponse([], $this->responseMessage('404'), 404);
	}
}
