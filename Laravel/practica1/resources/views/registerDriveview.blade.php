<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <style>
             body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        text-align: center;
    }

    h2 {
        color: #333;
    }

    form {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        padding: 20px;
        max-width: 300px;
        margin: 0 auto;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    input[type="submit"] {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 3px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #0056b3;
    }
        </style>
    </head>

    <body>
    <h2>Register de Usuario</h2>
    @if (isset($arrayMensaje) && count($arrayMensaje) > 0)
        <li>{{ $arrayMensaje[0] }}</li>
    @endif
    <a href="/driveLogin">Ir al Login</a>
<form action="/procesarRegisterDrive" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br><br>
    <label for="nick">Nick:</label>
    <input type="text" id="nick" name="nick" required><br><br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" value="Registrarse">
</form>

    </body>
</html>
