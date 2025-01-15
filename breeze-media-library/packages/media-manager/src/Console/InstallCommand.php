<?php

namespace Fitodac\MediaManager\Console;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Process\Process;

class InstallCommand extends Command implements PromptsForMissingInput
{

	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'media-manager:install';


	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Install the Media Manager React component';


	/**
	 * Execute the console command.
	 *
	 * @return int|null
	 */
	public function handle()
	{

		// $path = (new Filesystem)->ensureDirectoryExists(resource_path('js/Components'));
		// $this->info(database_path('migrations'));
		// return 1;

		// NPM Packages...
		$this->updateNodePackages(function ($packages) {
			return [
				'filepond' => '^4.30.6',
				'react-filepond' => '^7.1.2',
				'filepond-plugin-image-preview' => '^4.6.12',
				'@nextui-org/react' => '^2.2.9',
				'framer-motion' => '^10.18.0',
				'react-toastify' => '^10.0.4'
			] + $packages;
		});

		/**
		 * Making sure that directories exists
		 */
		(new Filesystem)->ensureDirectoryExists(database_path('migrations'));
		(new Filesystem)->ensureDirectoryExists(database_path('seeders'));
		(new Filesystem)->ensureDirectoryExists(app_path('Models'));
		(new Filesystem)->ensureDirectoryExists(app_path('Http/Controllers'));
		(new Filesystem)->ensureDirectoryExists(resource_path('js/components/MediaManager'));

		/**
		 * Copy library files
		 */
		(new Filesystem)->copyDirectory(__DIR__ . '/../../stubs/resources/js/components/MediaManager', resource_path('js/Components/MediaManager'));

		copy(__DIR__ . '/../../stubs/database/migrations/2024_02_28_034938_create_media_managers_table.php', database_path('migrations/2024_02_28_034938_create_media_managers_table.php'));
		copy(__DIR__ . '/../../stubs/database/seeders/MediaManagerSeeder.php', database_path('seeders/MediaManagerSeeder.php'));
		copy(__DIR__ . '/../../stubs/app/Models/MediaManager.php', app_path('Models/MediaManager.php'));
		copy(__DIR__ . '/../../stubs/app/Http/Controllers/MediaManagerController.php', app_path('Http/Controllers/MediaManagerController.php'));

		$this->info("Media Manager installed successfully!");
		return 1;
	}


	/**
	 * Update the "package.json" file.
	 *
	 * @param  callable  $callback
	 * @param  bool  $dev
	 * @return void
	 */
	protected static function updateNodePackages(callable $callback, $dev = true)
	{
		if (!file_exists(base_path('package.json'))) {
			return;
		}

		$configurationKey = $dev ? 'devDependencies' : 'dependencies';

		$packages = json_decode(file_get_contents(base_path('package.json')), true);

		$packages[$configurationKey] = $callback(
			array_key_exists($configurationKey, $packages) ? $packages[$configurationKey] : [],
			$configurationKey
		);

		ksort($packages[$configurationKey]);

		file_put_contents(
			base_path('package.json'),
			json_encode($packages, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . PHP_EOL
		);
	}

	/**
	 * Installs the given Composer Packages into the application.
	 *
	 * @param  array  $packages
	 * @param  bool  $asDev
	 * @return bool
	 */
	protected function requireComposerPackages(array $packages, $asDev = false)
	{
		$composer = $this->option('composer');

		if ($composer !== 'global') {
			$command = ['php', $composer, 'require'];
		}

		$command = array_merge(
			$command ?? ['composer', 'require'],
			$packages,
			$asDev ? ['--dev'] : [],
		);

		return (new Process($command, base_path(), ['COMPOSER_MEMORY_LIMIT' => '-1']))
			->setTimeout(null)
			->run(function ($type, $output) {
				$this->output->write($output);
			}) === 0;
	}
}
