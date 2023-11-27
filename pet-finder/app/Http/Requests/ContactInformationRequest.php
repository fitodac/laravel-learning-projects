<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactInformationRequest extends FormRequest
{
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		return [
			'whatsapp' => ['string', 'max:255'],
			'instagram_user' => ['string', 'max:255'],
			'facebook_user' => ['string', 'max:255'],
			'province_id' => ['numeric'],
			'city_id' => ['numeric'],
		];
	}
}
