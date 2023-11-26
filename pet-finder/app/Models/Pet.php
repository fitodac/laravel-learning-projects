<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

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
		'born_date',
		'token'
	];


	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function breed()
	{
		return $this->belongsTo(Breed::class)->select(['id', 'name']);
	}

	protected function petContactPage(): Attribute
	{
		return Attribute::make(
			get: fn () => config('app.url') . '/pet/' . $this->token
		);
	}
}
