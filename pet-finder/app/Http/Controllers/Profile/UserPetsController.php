<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Pet;
use App\Traits\createStorageDirectoryIfDoesNotExists;
use Intervention\Image\Facades\Image;

class UserPetsController extends Controller
{

	use createStorageDirectoryIfDoesNotExists;

	/**
	 * Display a listing of the resource.
	 */
	public function index(User $user)
	{
		return Inertia::render('MyPets/List', [
			'pets' => $user->pets
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create(User $user)
	{
		return Inertia::render('MyPets/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(User $user, Request $request)
	{
		$request->validate([
			'name' => 'required',
			'species' => 'required',
			'gender' => 'required',
			'breed_id' => 'required'
		]);

		$pet = Pet::create(array_merge($request->all(), ['user_id' => auth()->user()->id]));


		if ($request->hasFile('picture')) {
			$store_directory = 'public/pets';

			if (!$this->storageDirectoryExists($store_directory)) {
				$this->createStorageDirectory($store_directory);
			}

			$image_name = "$pet->id.webp";

			$img = Image::make($request->file('picture'))
				->fit(600, 600)
				->save("storage/pets/$image_name", 60);

			if ($img) {
				$pet->update(['picture' => $image_name]);
			}
		}

		return redirect()->route('user.pets', ['user' => $user->username]);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(User $user, string $id)
	{
		return Inertia::render('MyPets/Edit', [
			'pet' => $user->pets->find($id)
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(User $user, string $id, Request $request)
	{

		$request->validate([
			'name' => 'required',
			'species' => 'required',
			'gender' => 'required',
			'breed_id' => 'required'
		]);

		$pet = Pet::find($id);
		$pet->update($request->all());

		return redirect()->route('user.pets.edit', [
			'user' => $user->username,
			'pet' => $id
		]);
	}



	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(User $user, string $id, Request $request)
	{
		$pet = Pet::find($id);
		$request->request->add(['pet_name' => $pet->name]);

		$request->validate([
			'name' => 'required|same:pet_name'
		]);

		$pet->delete();

		return redirect()->route('user.pets', [
			'user' => $user->username
		]);
	}
}
