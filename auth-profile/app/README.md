### ¿Qué es esto?
Esto es parte de una aplicación que usa Laravel 10 para el backend y Next.js 14 para el frontend usando JWT para autenticar un usuario y permitirle ver una sencilla página con sus datos en donde podrá modificarlos y subir una foto.

Representa un ejercicio de cómo implementar buenas prácticas en autenticación en una aplicación de este tipo.
<br>
<br>


### Para ejecutar esta aplicación
1. Sitúate en la carpeta principal del proyecto

2. Ejecuta
```bash
npm i
```

3. Crea un .env
```bash
cp .env.example .env
```

4. Completa los datos

`NEXT_PUBLIC_API_URL`: Será la URL de Laravel

`APP_VERSION`: Puede ser `1` o lo qeu quieras 

`NEXT_PUBLIC_PREFIX`: Un string que quieras usar para identificar la aplicación, por ejemplo `authAPP` o lo que quieras.


3. Finalmente ejecuta la aplicación con
```bash
npm run dev
```