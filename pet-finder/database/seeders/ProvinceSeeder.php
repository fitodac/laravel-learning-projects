<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Province;
use App\Models\City;

class ProvinceSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$seeders = [
			// 'CABA',
			'catamarca',
			'chaco',
			'chubut',
			'cordoba',
			'corrientes',
			'entrerios',
			'formosa',
			'GBA',
			'jujuy',
			'laPampa',
			'laRioja',
			'mendoza',
			'misiones',
			'neuquen',
			'rioNegro',
			'salta',
			'sanJuan',
			'sanLuis',
			'santaCruz',
			'santaFe',
			'santiagoDelEstero',
			'tierraDelFuego',
			'tucuman',
		];

		foreach( $seeders as $seeder ){
			$path = storage_path("seeders/locations/$seeder.json");
			$data = json_decode(file_get_contents($path), true);


			Province::create([
				'id' => $data['id'],
				'name' => $data['nombre']
			]);

			foreach( $data['ciudades'] as $city ){
				City::create([
					// 'id' => $city['id'],
					'name' => $city['nombre'],
					'province_id' => $data['id']
				]);
			}
		}
	}
}
