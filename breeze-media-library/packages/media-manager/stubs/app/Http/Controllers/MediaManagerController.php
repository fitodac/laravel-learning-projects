<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class MediaManagerController extends Controller
{

	/**
	 * Upload files
	 */
	public function upload(Request $request)
	{

		$year = Carbon::now()->year;
		$month = Carbon::now()->format('m');

		$file = Storage::putFile("images/$year/$month", $request->file('filepond'));
		return $file;
	}
}
