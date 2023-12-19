<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css') }}">
        <title>Laravel</title>
    </head>
    <body>
        @if (isset($arrayMensaje) && count($arrayMensaje) > 0)
        <h2>{{ $arrayMensaje[0] }}</h2>
        @endif
        <h2>Login de Usuario</h2>
        
        <form action="/procesarLoginDrive" method="POST">
            <label for="nick">Nick:</label>
            <input type="text" id="nick" name="nick" required><br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Logearse">
            <a href="/">Ir al Register</a>
        </form>
    </body>
</html>
