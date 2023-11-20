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
            <form action="/agregarAlumno" method="post">
                <h2>Agregar Alumno</h2>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <label for="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos">
                <label for="nacimiento">Nacimiento:</label>
                <input type="int" id="nacimiento" name="nacimiento">
                <label for="dni">DNI:</label>
                <input type="text" id="dni" name="dni">
                <input type="submit" value="Agregar">
            </form>
        </div>
        <div class="form-container">
            <form action="/borrarAlumno" method="post">
                <h2>Borrar Alumno</h2>
                <label for="dni_borrar">DNI:</label>
                <input type="text" id="dni" name="dni">
                <input type="submit" value="Borrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/editarAlumno" method="post">
                <h2>Editar Alumno</h2>
                <label for="nombre_editar">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <label for="apellidos_editar">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos">
                <label for="nacimiento_editar">Nacimiento:</label>
                <input type="int" id="nacimiento" name="nacimiento">
                <label for="dni_editar">DNI:</label>
                <input type="text" id="dni" name="dni">
                <input type="submit" value="Editar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAlumno" method="post">
                <h2>Mostrar Alumno</h2>
                <label for="dni_mostrar">DNI:</label>
                <input type="text" id="dni" name="dni">
                <input type="submit" value="Mostrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAlumnoNombre" method="post">
                <h2>Filtrar Alumno</h2>
                <label for="dni_mostrar">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <input type="submit" value="Mostrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAlumnoAsignatura" method="post">
                <h2>Mostrar Alumno por asignatura y año</h2>
                <label for="dni_mostrar">ID Asignatura:</label>
                <input type="text" id="idAsignatura" name="idAsignatura">
                <label for="dni_mostrar">Year:</label>
                <input type="text" id="year" name="year">
                <input type="submit" value="Mostrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/mostrarAlumnotodos" method="post">
                <h2>Mostrar Todos los Alumno</h2>
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
