<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Tag;

class HomeTest extends TestCase
{
	/**
	 * A basic feature test example.
	 */
	public function test_home_page(): void
	{

		$this
			->withoutExceptionHandling()
			->get('/')
			->assertStatus(200)
			->assertSee('No hay etiquetas');
	}

	public function test_with_data(): void
	{
		$tag = Tag::factory()->create();

		$this
			->get('/')
			->assertStatus(200)
			->assertSee($tag->name)
			->assertDontSee('No hay etiquetas');
	}
}
