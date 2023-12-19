<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
        <ul>

        Numeros menores de 50
        @foreach ($numeros as $numero)
        @if($numero<=50)
        <li>{{$numero}}</li>
        @endif
        @endforeach
        Numeros mayores de 50
        @foreach ($numeros as $numero)
        @if($numero>50)
        <li>{{$numero}}</li>
        @endif
        @endforeach
        </ul>

    </body>
</html>
