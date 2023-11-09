<?php

use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ResetPasswordController;
use App\Http\Controllers\Api\VerifyAccountController;
use App\Http\Controllers\Api\ProfileController;
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

Route::post('/forgot-password', [ResetPasswordController::class, 'sendResetPasswordEmail'])->name('password.reset.email');
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword'])->name('password.reset');

Route::group(['middleware' => ['auth:sanctum', 'verified']], function(){
	Route::resource('/profile', ProfileController::class)
	->only(['index', 'update']);
});


Route::group(['middleware' => ['auth:sanctum']], function(){
	Route::post('/logout', [AuthController::class, 'logout']);

	Route::post('/email/verify/{id}/{hash}', [VerifyAccountController::class, 'verifyAccount'])->name('verification.verify');
	Route::post('/email/verification-notification', [VerifyAccountController::class, 'resendVerificationEmail'])->name('verification.send');
});

Route::fallback([ErrorController::class, 'error404'])->name('error');