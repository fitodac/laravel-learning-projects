<p align="center">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
</p>

<<<<<<< HEAD

# psst... revisa este artículo:
https://medium.com/@rahunn3/next-js-13-app-dir-and-laravel-sanctum-elevating-user-authentication-with-nextauth-js-1368829e4a3a

### To do:
- Implementar NextAuth en el front



# Ejercicio de autenticación
=======
>>>>>>> auth-profile/frontend

Este proyecto es solo un ejercicio de registro, autenticación y manejo de sesión de usuarios y no debe ser usado en totalidad o en parte en producción ya que podría contener bugs o dar lugar a errores en el código de la aplicación donde se quiera implementar.

Se pretende que la aplicación haga lo siguiente:

<br>

### Rutas API
`POST` `/register` 

<br>

`POST` `/login` 
`GET` `/login` 

<br>

`POST` `/forgot-password` Envía un email de recuperación de contraseña

`POST` `/reset-password` Guarda la nueva contraseña del usuario

<br>

`GET` `/profile` 

`PUT` `/profile` 

`POST` `/profile/{id}/thumbnail` 

<br>

`POST` `/logout` 

`POST` `/email/verify/{id}/{hash}` 

`POST` `/email/verification-notification` 