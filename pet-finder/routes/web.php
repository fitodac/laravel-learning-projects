<?php


use App\Http\Controllers\PetController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\Profile\UserPetsController;
use App\Http\Controllers\Profile\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	if (auth()->user()) {
		return redirect()->route('user.pets', ['user' => auth()->user()->name]);
	} else {
		return Inertia::render('Home/index', [
			'canLogin' => Route::has('login'),
			'canRegister' => Route::has('register')
		]);
	}
})->name('home');

Route::resource('/pets', PetController::class)->names([
	'index' => 'pets.list',
	'create' => 'pets.create',
	'show' => 'pets.show',
	'edit' => 'pets.edit',
	'destroy' => 'pets.destroy'
]);

Route::get('/pet/{pet:token}', [PetController::class, 'show'])->name('pet.contact');

Route::middleware(['auth', 'verified'])->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::patch('/profile/contact-information', [ProfileController::class, 'updateContactInformation'])->name('profile.update.contact_information');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


	Route::resource('/{user:name}/pets', UserPetsController::class)
		->except('show')
		->names([
			'index' => 'user.pets',
			'create' => 'user.pets.create',
			'store' => 'user.pets.store',
			// 'show' => 'user.pets.show',
			'edit' => 'user.pets.edit',
			'update' => 'user.pets.update',
			'destroy' => 'user.pets.destroy',
		]);

	Route::post('/images/upload', [ImagesController::class, 'upload'])->name('images.upload');
});

require __DIR__ . '/auth.php';
