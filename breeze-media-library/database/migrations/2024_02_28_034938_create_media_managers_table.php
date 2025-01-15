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
		Schema::create('media_manager', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->string('filepath');
			$table->text('alt')->nullable();
			$table->text('caption')->nullable();
			$table->unsignedBigInteger('user');
			$table->timestamps();

			$table->foreign('user')->references('id')->on('users');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('media_manager');
	}
};
