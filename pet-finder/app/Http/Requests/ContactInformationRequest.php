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
			'whatsapp' => ['string', 'max:255', 'nullable'],
			'instagram_user' => ['string', 'max:255', 'nullable'],
			'facebook_user' => ['string', 'max:255', 'nullable'],
			'province_id' => ['numeric', 'nullable'],
			'city_id' => ['numeric', 'nullable'],
		];
	}
}
