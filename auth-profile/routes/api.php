<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\ErrorController;
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
Route::get('/', [ErrorController::class, 'index'])->name('api');

Route::post('/register', [RegisterController::class, 'store']);

/**
 * GET /login se usa cuando redirige desde logout si
 * accedes a esa ruta y no tenías una sesión iniciada.
 */
Route::get('/login', [ErrorController::class, 'index'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::group(['middleware' => ['auth:sanctum', 'verified']], function(){
	Route::post('/logout', [AuthController::class, 'logout']);
	Route::resource('/profile', ProfileController::class)
	->only(['index', 'update']);
});

Route::fallback([ErrorController::class, 'error404'])->name('error');