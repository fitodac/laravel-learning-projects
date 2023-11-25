<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Inertia\Inertia;

class ImagesController extends Controller
{
	public function upload(Request $request)
	{

		if ($request->hasFile('image')) {
			$image_name = "$request->id.webp";

			Image::make($request->file('image'))
				->fit(600, 600)
				->save("storage/pets/$image_name", 60);
		}

		// dd($request->redirect);

		// return redirect()->route('user.pets.edit', [
		// 	'user' => $user->username,
		// 	'pet' => $id
		// ]);
	}
}
