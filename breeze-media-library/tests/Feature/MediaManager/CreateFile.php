<?php

namespace Tests\Feature\MediaManager;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\MediaManager;
use App\Http\Controllers\MediaManagerController;
use Inertia\Inertia;
use GuzzleHttp\Psr7\UploadedFile;



use Symfony\Component\HttpFoundation\Request;

class CreateFile extends TestCase
{

	public function test_the_application_returns_a_successful_response(): void
	{
		$response = $this->get('/');

		$response->assertStatus(200);
	}

	public function test_media_manager_screen_can_be_rendered(): void
	{
		$response = $this->get('/media-manager');
		$response->assertStatus(200);
	}

	// If the file upload fails, the upload method should return false.
	// public function test_upload_method_returns_false_if_file_upload_fails()
	// {
	// 	$controller = new MediaManagerController();
	// 	$request = new Request();
	// 	$request->shouldReceive('file')->andReturn(null);

	// 	$response = $controller->upload($request);

	// 	$this->assertFalse($response);
	// }


	// The upload method should upload a file to the correct directory and create a new MediaManager object.
	public function test_upload_method_uploads_file_and_creates_MediaManager_object()
	{
		// Arrange
		// $controller = new MediaManagerController();
		// $request = new Request();
		// $file = UploadedFile::fake()->create('test.jpg');
		// $request->shouldReceive('file')->andReturn($file);
		// $user = User::factory()->create();
		// $this->actingAs($user);

		// // Act
		// $response = $controller->upload($request);

		// // Assert
		// $this->assertFileExists(storage_path('app/public/images/' . Carbon::now()->year . '/' . Carbon::now()->format('m') . '/test.jpg'));
		// $this->assertInstanceOf(MediaManager::class, MediaManager::first());
	}


	// The upload method should handle large files and return an error message if the file size exceeds the limit.
	public function test_upload_method_returns_error_message_if_file_size_exceeds_limit()
	{
		// $controller = new MediaManagerController();
		// $request = new Request();
		// $file = UploadedFile::fake()->create('test.jpg', 5000); // Create a fake file with size 5000 KB
		// $request->shouldReceive('file')->andReturn($file);

		// $response = $controller->upload($request);

		// $this->assertEquals('File size exceeds the limit.', $response);
	}
}
