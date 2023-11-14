<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
	return view('welcome');
});

Route::get('/email/verify/{id}/{hash}', function (Request $request, int $id, string $hash){
	return redirect(env('FRONTEND_URI')."/email/verify/$id/$hash/?expires=$request->expires&signature=$request->signature");
})->name('verification.verify');



Route::get('/email/verify', function(){
	return 'verification.notice';
})->middleware('auth')->name('verification.notice');

Route::get('/reset-password', function (Request $request){
	return "/reset-password/?email=$request->email&token=$request->token";
})->name('password.reset.link');