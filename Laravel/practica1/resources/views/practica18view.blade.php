<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
    <title>Ver Archivo CSV</title>
</head>
<body>
    <h1>Contenido del Archivo CSV</h1>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
        </tr>
        @foreach($arrayDatos as $subArray)
            <tr>
                @foreach($subArray as $data)
                    <td>{{ $data }}</td>
                @endforeach
            </tr>
        @endforeach
    </table>
</body>
</html>
