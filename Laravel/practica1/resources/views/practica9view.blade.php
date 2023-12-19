<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
    
    
    @php
    for ($i = 0; $i < 3; $i++) {
        $dato = time();
        echo "Desde el 1-01-1970 han pasado: $dato segundos";
        sleep(1); // Espera 1 segundo
        echo "<br>";
    }
@endphp
    </body>
</html>
