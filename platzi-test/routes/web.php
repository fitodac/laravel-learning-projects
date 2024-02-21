<?php

use Illuminate\Support\Facades\Route;
use App\Models\Tag;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;

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
	$tags = Tag::get();
	return view('welcome', [
		'tags' => $tags ?? null
	]);
});

Route::get('about', function () {
	return 'hola soy about';
});

Route::view('profile', 'profile');
Route::post('profile', [ProfileController::class, 'upload']);

Route::post('tags', [TagController::class, 'store']);
