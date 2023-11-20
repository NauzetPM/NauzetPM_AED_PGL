<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
        <ul>
            @for ($i = 0; $i < count($palabrasArray); $i++)
                <li>{{ $palabrasArray[$i] }}</li>
            @endfor
        </ul>

    </body>
</html>
