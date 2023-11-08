<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Breed;

class BreedSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$seeders = [
			'dog',
			'cat'
		];

		foreach( $seeders as $seeder ){
			$path = storage_path("seeders/breeds/$seeder.json");
			$data = json_decode(file_get_contents($path), true);

			foreach( $data as $breed ){
				Breed::create([
					'name' => $breed,
					'species' => $seeder
				]);
			}
		}
	}
}
