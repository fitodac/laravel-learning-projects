<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('pets', function (Blueprint $table) {
			$table->id();
			$table->string('name');

			$table->unsignedBigInteger('user_id');
			$table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

			$table->string('picture')->nullable()->default('');
			$table->string('species');
			$table->enum('gender', ['macho', 'hembra']);
			$table->text('description');

			$table->unsignedBigInteger('breed_id');
			$table->foreign('breed_id')->references('id')->on('breeds')->onUpdate('cascade')->onDelete('cascade');

			$table->string('token');

			$table->date('born_date');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('pets');
	}
};
