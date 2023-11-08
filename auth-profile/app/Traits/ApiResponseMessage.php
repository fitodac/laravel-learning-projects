<?php 
namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

trait ApiResponseMessage
{

	protected $messages = [
		// Register
		'register_success' => "Bienvenido, ya eres parte de nuestra aplicación",

		// Login
		'login_error' => "No hemos podido autenticarte",
		'logout' => "Has terminado tu sesión con éxito",

		// Profile
		'profile_updated' => "Hemos actualizado tu perfil",

		// Errores de usuario
		'wrong_user_id' => "El ID es incorrecto",
		'wrong_email' => "Este email no existe en nuestra base de datos",
		'wrong_password' => "La contraseña que estás usando es incorrecta",

		// Errores de servidor
		'route_method_not_allowed' => "El método que estás intentando usar no está permitido para esta ruta",
		'unauthorized' => "No estás autorizado para realizar esta acción",
		'404' => "La ruta que estás buscando no existe o ha sido cambiada"
	];


	public function responseMessage($key)
	{
		return $this->messages[$key] ?? "";
	}

}