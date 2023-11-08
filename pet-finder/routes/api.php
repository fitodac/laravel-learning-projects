<?php

use App\Http\Controllers\Api\PetController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});

Route::get('/', function(){
	return 'Hello pet finder';
});

Route::get('/provinces', [ProvinceController::class, 'index']);
Route::get('/provinces/{province:name}', [ProvinceController::class, 'show']);

Route::get('/{user:username}', [UserController::class, 'show']);
Route::get('/{user:username}/pet/{pet}', [PetController::class, 'show']);
