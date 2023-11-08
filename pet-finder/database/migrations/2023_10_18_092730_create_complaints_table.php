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
		Schema::create('complaints', function (Blueprint $table) {
			$table->id();
			
			$table->unsignedBigInteger('pet_id');
			$table->foreign('pet_id')->references('id')->on('pets')->onUpdate('cascade')->onDelete('cascade');
			
			$table->date('date');
			$table->text('comment');

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('complaints');
	}
};
