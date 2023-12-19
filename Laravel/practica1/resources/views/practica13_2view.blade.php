<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <style>
            body{
                background-color: {{$colorFavorito}}
            }
        </style>
    </head>

    <body>
        <ul>
            @for ($i = 0; $i < count($colores); $i++)
                <li>{{ $colores[$i] }}</li>
            @endfor
        </ul>
        <a href="/practica13">Inicio</a>
    </body>
</html>
