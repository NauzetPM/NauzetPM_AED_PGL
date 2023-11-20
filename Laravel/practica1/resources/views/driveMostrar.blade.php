<!DOCTYPE html>
<html>
<head>
    <title>Lista de Ficheros</title>
</head>
<body>
    @if (session()->has('nick'))
        <h1>Lista de Ficheros en Storage ({{session()->get('nick')}})</h1>
        <ul>
            @foreach($files as $file)
                <li>
                <a href="/descargarDrive/{{session()->get('nick')}}/{{ basename($file) }}">{{ basename($file) }}</a>
                 <a href="/eliminarDrive/{{session()->get('nick')}}/{{basename($file) }}">
                   Eliminar
                </a>
                </li>
            @endforeach
        </ul>

    <form action="/fileupload" enctype='multipart/form-data' method="post">
        @csrf
        <label for="fichero">sube fichero</label>
        <input type="file" name="myfile" id="fichero">
        <input type="submit" value="Subir">
        </form>
    @else
        <h1>Error</h1>
    @endif
</body>
</html>

