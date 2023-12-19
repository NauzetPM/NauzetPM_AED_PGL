<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css') }}">
        <title>Laravel</title>

   
    </head>

    <body>
    <h2>Register de Usuario</h2>
    @if (isset($arrayMensaje) && count($arrayMensaje) > 0)
        <li>{{ $arrayMensaje[0] }}</li>
    @endif

<form action="/procesarRegisterDrive" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br><br>
    <label for="nick">Nick:</label>
    <input type="text" id="nick" name="nick" required><br><br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" value="Registrarse">
    <a href="/driveLogin">Ir al Login</a>
</form>

    </body>
</html>
