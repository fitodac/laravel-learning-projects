## Breeze React UI

Soportado para Laravel 10^

### Iniciando

1. Instala Laravel
2. Instala Breeze

```bash
sail composer require laravel/breeze --dev
```

Luego ejecutas

```bash
sail artisan breeze:install
```

Asegúrate que cuando instales Breeze, selecciones la opción de frontend con React.

3. Corre las migraciones.
4. Instala los paquetes de `npm` requeridos

```bash
npm i @nextui-org/react framer-motion remixicon
```

5. Instala dependencias de npm

```bash
npm i
```

6. Reemplaza el archivo `tailwind.config.js` por el del proyecto.
7. Reemplaza el directorio `resources/js` con el del proyecto
8. Reemplaza el directorio `resources/views` con el del proyecto

<br/>

### Traducciones

Puedes alternar entre **español** o **inglés** modificando el valor de la vairable locale en `resources/js/i18n/translations.ts`

<br>
### Verficación de email
Para habilitar la verificación de email en los usuarios:

En el modelo `User` debes implementar `MustVerifyEmail`

```php
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
	// ...
}
```

### Testing

Breeze cuenta con sus propios test los que se crean al momento de instalar la librería y puden correrse ejecutando el comando

```bash
sail artisan test
```
