<?php 
namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

trait ApiResponse
{
	
	public function successResponse(
		$data = [], 
		$message = 'OK', 
		$statusCode = 200
	)
	{
		return response()->json([
			'success' => true,
			'code' 		=> $statusCode,
			'message' => $message,
			'data' 		=> $data
		], $statusCode);
	}


	public function errorResponse(
		$data = null,
		$message = 'Error',
		$statusCode = 500
	)
	{
		return response()->json([
			'success' => false,
			'code' 		=> $statusCode,
			'message' => $message,
			'data' 		=> $data
		], $statusCode);
	}

}