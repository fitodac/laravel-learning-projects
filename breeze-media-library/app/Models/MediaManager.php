<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaManager extends Model
{
	use HasFactory;

	protected $table = 'media_manager';

	protected $fillable = [
		'name',
		'filepath',
		'alt',
		'caption',
		'user'
	];

	public function getFilepathAttribute()
	{
		return 'storage/' . $this->attributes['filepath'];
	}
}
