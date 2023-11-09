<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {


			VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
				
				$user = auth()->user();

				return (new MailMessage)
					->subject('Acción requerida: verifica tu email')
					->greeting("Saludos terricola!")
					->lines([
						'Para terminar de configurar tu cuenta, necesitamos que verifiques tu dirección de email.',
						'Haz click en el botón abajo y muéstranos que no eres un robot...'
					])
					->action('Verifica tu email', $url)
					->salutation('Gracias por registrarte.');
			});



			ResetPassword::createUrlUsing(function (User $user, string $token) {
				return "http://localhost/reset-password?email=$user->email&token=$token";
			});


    }
}
