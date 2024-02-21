<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
	public function store(Request $request)
	{
		Tag::create($request->all());

		return redirect('/');
	}
}
