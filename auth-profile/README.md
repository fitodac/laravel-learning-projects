<p align="center">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
</p>

# Ejercicio de autenticación

Este proyecto es solo un ejercicio de registro, autenticación y manejo de sesión de usuarios y no debe ser usado en totalidad o en parte en producción ya que podría contener bugs o dar lugar a errores en el código de la aplicación donde se quiera implementar.

Se pretende que la aplicación haga lo siguiente:

<br>

## Register

#### Backend
1. El usuario ha de poder registrarse en la aplicación. ✅
2. Al registrarse se devolverá el usuario [201]. ✅
// 3. Si el username o email ya existen devolverá una notificación de error.

#### Email confirmation
1. Al registrarse, el usuario recibe un correo para confirmar us dirección de email
2. El usuario deberá tener su correo verificado para acceder a la aplicación.
En caso de que quiera logearse sin haber cobnfirmado su correo, se le mostrará un 
mensaje con un link a una página de verificación en la que deberá ingresar su 
dirección de email para que Laraver vuelva a enviarle un email de verificación.


#### Frontend
1. El usuario es devuelto en la respuesta y se ha de almacenar en un storage persistente en el navegador.
2. En el front, ha de existir un storage que sirva para manejar la información del usuario. <br>
Nunca se han de consumir los datos directamente de localStorage.
<br>
<br>



## Login

#### Backend
1. El usuario accede con su email y password. ✅
2. En el inicio de sesión se debe enviar un valor para "device_name". ✅
3. Si el email o password son incorrectos devuelve error.

#### Frontend
<br>


## Profile
Para acceder a la ruta `/profile` siempre se deberá enviar el `Bearer token`.

#### Backend
1. Se obtienen los datos de usuario en la ruta `/profile`. ✅
2. Se actualizan los datos en `/profile/{id}`.
3. Si el ID del URL es diferente al ID del usuario devuelve error. ✅
4. El usuario puede subir una foto de perfil.

#### Frontend
<br>