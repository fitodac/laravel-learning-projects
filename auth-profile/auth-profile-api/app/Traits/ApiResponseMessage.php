<?php 
namespace App\Traits;


trait ApiResponseMessage
{

	protected $messages = [
		// Register
		'register_success' => "Bienvenido, ya eres parte de nuestra aplicación",

		// Login
		'login_error' => "No hemos podido autenticarte",
		'logout' => "Has terminado tu sesión con éxito",

		// Profile
		'profile_nothing_has_changed' => "No se han realizado cambios en tu perfil",
		'profile_updated' => "Hemos actualizado tu perfil",
		'thumbnail_updated' => "Tu imagen de perfil se ha actualizado correctamente",
		'thumbnail_updated_error' => "Ha ocurrido un error al actualizar tu imagen de perfil",

		// Verificación de email
		'email_verified' => "Tu email ha sido verificado correctamente",
		'email_already_been_verified' => "Tu email ya ha sido verificado antes",
		'email_verification_sent' => "Te hemos enviado un email de verificación",
		'user_email_not_verified' => "Debes confirmar tu email antes de acceder a la aplicación",

		// Errores de usuario
		'wrong_user_id' => "El ID es incorrecto",
		'wrong_email' => "Este email no existe en nuestra base de datos",
		'wrong_password' => "La contraseña que estás usando es incorrecta",

		// Errores de servidor
		'route_method_not_allowed' => "El método que estás intentando usar no está permitido para esta ruta",
		'unauthorized' => "No estás autorizado para realizar esta acción",
		'405' => "Método no está permitido",
		'404' => "La ruta que estás buscando no existe o ha sido cambiada"
	];


	public function responseMessage($key)
	{
		return $this->messages[$key] ?? "";
	}

}