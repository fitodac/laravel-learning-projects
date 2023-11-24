<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
	use HasFactory;

	protected $fillable = [
		'name',
		'user_id',
		'picture',
		'species',
		'gender',
		'description',
		'breed_id',
		'born_date'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function breed()
	{
		return $this->belongsTo(Breed::class)->select(['id', 'name']);
	}
}
