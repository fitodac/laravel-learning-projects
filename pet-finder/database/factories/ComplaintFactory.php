<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Complaint>
 */
class ComplaintFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'pet_id' => fake()->numberBetween(1, 100),
			'date' => fake()->date('Y-m-d'),
			'comment' => fake()->paragraphs(5, true),
		];
	}
}
