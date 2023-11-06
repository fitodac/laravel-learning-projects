<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
	use HasFactory;

	public function user()
	{
		return $this->belongsTo(User::class)->select([
			'id',
			'username',
			'name',
			'lastname',
			'email',
			'whatsapp',
			'instagram_user',
			'facebook_user',
			'province_id',
			'city_id'
		]);
	}

	public function breed()
	{
		return $this->belongsTo(Breed::class)->select(['id', 'name']);
	}
}
