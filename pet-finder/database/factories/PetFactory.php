<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{

		$breed_id = fake()->numberBetween(1, 388);
		$species = $breed_id <= 333 ? 'dog' : 'cat';

		return [
			'name' => fake()->firstName(),
			'user_id' => fake()->numberBetween(1, 200),
			'picture' => '',
			'species' => $species,
			'gender' => fake()->randomElement(['macho', 'hembra']),
			'description' => fake()->paragraphs(5, true),
			'breed_id' => $breed_id,
			'born_date' => fake()->date('Y-m-d'),
			'token' => Str::random(16)
		];
	}
}
