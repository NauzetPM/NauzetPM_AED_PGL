<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


        <!-- Styles -->
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
        @if (isset($arrayMensaje) && count($arrayMensaje) > 0)
        <h2>{{ $arrayMensaje[0] }}</h2>
        @endif
        <h2>Login de Usuario</h2>
        <a href="/drive">Ir al Register</a>
        <form action="/procesarLoginDrive" method="POST">
            <label for="nick">Nick:</label>
            <input type="text" id="nick" name="nick" required><br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Logearse">
        </form>
    </body>
</html>
