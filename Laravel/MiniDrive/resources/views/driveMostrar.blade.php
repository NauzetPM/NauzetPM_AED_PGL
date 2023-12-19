<!DOCTYPE html>
<html>
<head>
    <title>Lista de Ficheros</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/mostrar.css') }}">
</head>
<body>
    <div class="container">
        @if (session()->has('nick'))
            <h1>Lista de Ficheros en Storage ({{ session('estoy') }})</h1>
            @if ((strpos($ruta, '/') !== false))
            <form action="/volver" method="POST">
            <input type="submit" value="Volver">
            </form>
            @endif


            <a class="button-link" href="/logout">LogOut</a>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre del Carpeta</th>
                        <th>Abrir</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($directorio as $directorio)
                        <tr>
                            <td>{{ basename($directorio) }}</td>
                            <td><a class="button-link" href="/cargarArchivos/{{ basename($directorio) }}">Abrir</a></td>
                            <td><a class="button-link" href="/eliminarCarpeta/{{ basename($directorio) }}">Eliminar</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <form action="/crearCarpeta" method="POST">
            <label for="nombre">Nombre Carpeta a crear:</label>
            <input type="text" id="nombreCarpeta" name="nombreCarpeta" required><br><br>
            <input type="submit" value="Crear">
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre del Archivo</th>
                        <th>Descargar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($files as $file)
                        <tr>
                            <td>{{ basename($file) }}</td>
                            <td><a class="button-link" href="/descargarDrive/{{ basename($file) }}">Descargar</a></td>
                            <td><a class="button-link" href="/eliminarDrive/{{ basename($file) }}">Eliminar</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            <form action="/fileupload" enctype='multipart/form-data' method="Post">
                @csrf
                <label for="fichero">Sube fichero</label>
                <input type="file" name="myfile" id="fichero">
                <input type="submit" value="Subir" class="button-link">
            </form>
        @else
            <h1>Error</h1>
        @endif
    </div>
</body>
</html>



