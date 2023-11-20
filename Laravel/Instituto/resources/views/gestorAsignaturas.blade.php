<!doctype html>
<html lang="es">
    <head>
        <title>Opciones</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/forms.css') }}">
    </head>
<body>
    <a href="opciones">Volver Menu</a>
    @if (session()->has('nick'))
    <div>
        <div class="form-container">
            <form action="/agregarAsignatura" method="post">
                <h2>Agregar Asignatura</h2>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <label for="curso">Curso:</label>
                <input type="text" id="curso" name="curso">
                <input type="submit" value="Agregar">
            </form>
        </div>
        <div class="form-container">
            <form action="/borrarAsignatura" method="post">
                <h2>Borrar Asignatura</h2>
                <label for="dni_borrar">ID:</label>
                <input type="text" id="id" name="id">
                <input type="submit" value="Borrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/editarAsignatura" method="post">
                <h2>Editar Asignatura</h2>
                <label for="nombre_editar">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <label for="curso_editar">Curso:</label>
                <input type="text" id="curso" name="curso">
                <label for="id">ID:</label>
                <input type="text" id="id" name="id">
                <input type="submit" value="Editar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAsignatura" method="post">
                <h2>Mostrar Asignatura</h2>
                <label for="dni_mostrar">ID:</label>
                <input type="text" id="id" name="id">
                <input type="submit" value="Mostrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAsignaturatodos" method="post">
                <h2>Mostrar Todas las Asignaturas</h2>
                <input type="submit" value="Mostrar">
            </form>
        </div>
    </div>
    @if (isset($arrayMensaje) && count($arrayMensaje) > 0)
    <ul>
        @foreach ($arrayMensaje as $mensaje)
            <li>{{ $mensaje }}</li>
        @endforeach
    </ul>
@endif


    @endif
</body>
</html>
