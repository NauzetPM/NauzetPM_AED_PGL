<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        </style>
    </head>

    <body>
    <h1>Detalles del Usuario</h1>
    @if ($contenido)
        <table>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Contraseña</th>
            </tr>
            @foreach ($contenido as $usuario)
                <tr>
                    <td>{{ $usuario[0] }}</td>
                    <td>{{ $usuario[1] }}</td>
                    <td>{{ $usuario[2] }}</td>
                </tr>
            @endforeach
        </table>
    @else
        <p>No se encontraron datos de usuario.</p>
    @endif
    </body>
</html>
