<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		
		// Reset cached roles and permissions
		app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

		$admin = Role::create([
			'name' => 'admin',
			'guard_name' => 'api'
		]);

		$access_everything = Permission::create([
			'name' => 'control access',
			'guard_name' => 'api'
		]);

		$access_everything->assignRole($admin);

	}
}
