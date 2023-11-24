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
		Schema::table('users', function (Blueprint $table) {
			$table->string('username')->after('id');
			$table->string('lastname')->after('name');
			$table->string('whatsapp')->after('password')->nullable();
			$table->string('instagram_user')->after('whatsapp')->nullable();
			$table->string('facebook_user')->after('instagram_user')->nullable();
			
			$table->unsignedBigInteger('province_id')->nullable()->after('facebook_user');
			$table->foreign('province_id')->references('id')->on('provinces')->onUpdate('cascade')->onDelete('cascade');

			$table->unsignedBigInteger('city_id')->nullable()->after('province_id');
			$table->foreign('city_id')->references('id')->on('cities')->onUpdate('cascade')->onDelete('cascade');
			
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('users', function (Blueprint $table) {
			//
		});
}
};
