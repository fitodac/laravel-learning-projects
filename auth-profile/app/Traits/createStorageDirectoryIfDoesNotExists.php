<?php 
namespace App\Traits;

use Illuminate\Support\Facades\Storage;


trait createStorageDirectoryIfDoesNotExists
{

	public function storageDirectoryExists($directory)
	{
		return Storage::exists($directory);
	}

	public function createStorageDirectory($directory)
	{
		if( !Storage::exists($directory) ){
			Storage::makeDirectory($directory);
			return true;
		}
		
		return false;
	}
}