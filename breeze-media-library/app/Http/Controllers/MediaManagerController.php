<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\HtmlString;
use Carbon\Carbon;
use Inertia\Inertia;

use App\Models\MediaManager;


class MediaManagerController extends Controller
{

	/**
	 * Media manager page
	 */
	public function index()
	{
		return Inertia::render('MediaManager/Page');
	}


	public function getImages()
	{
		return response()->json([
			'gallery' => MediaManager::all(),
			'csrf' => csrf_token(),
		]);
	}


	/**
	 * Upload files
	 */
	public function upload(Request $request)
	{
		$user = auth()->user();
		if (!$user) return;

		$year = Carbon::now()->year;
		$month = Carbon::now()->format('m');

		$file = Storage::putFile("public/images/$year/$month", $request->file('filepond'));

		if ($file) {
			MediaManager::create([
				'name' => basename($file),
				'filepath' => str_replace('public/', '', $file),
				'user' => $user->id,
			]);
		}
		return $file;
	}

	public function edit(MediaManager $media, Request $request)
	{

		$media->update(array_merge($request->all(), [
			'filepath' => str_replace('storage/', '', $request->filepath),
			'alt' => new HtmlString(strip_tags($request->alt)),
			'caption' => new HtmlString(strip_tags($request->caption)),
		]));

		session()->flash('success', 'Image updated successfully');
		return redirect()->back()->with([
			'success' => 'Image updated successfully'
		]);
	}

	/**
	 * Destroy image
	 */
	public function destroy(MediaManager $media)
	{
		$path = str_replace('storage/', 'public/', $media->filepath);
		if (Storage::exists($path)) {
			$deleted = Storage::delete($path);

			if ($deleted) {
				$media->delete();
			}
		}

		return redirect()->back()->with('success', 'Image deleted successfully');
	}
}
