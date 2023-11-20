<!DOCTYPE html>
<html>
<head>
    <title>Lista de Ficheros</title>
</head>
<body>
    <h1>Lista de Ficheros en Storage ({{ $carpeta }})</h1>
    <ul>
        @foreach($files as $file)
            <li>
            <a href="/descargar/{{ basename($file) }}">{{ basename($file) }}</a>
             <a href="/eliminar/{{basename($file) }}">
               Eliminar
            </a>
            </li>
        @endforeach
    </ul>
</body>
</html>

