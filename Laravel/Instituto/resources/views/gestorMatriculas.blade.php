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
            <form action="/agregarMatriculas" method="post">
                <h2>Agregar Matriculas</h2>
                <label for="dni">DNI:</label>
                <input type="text" id="dni" name="dni">
                <label for="anio">Año:</label>
                <input type="text" id="anio" name="anio">
                <label for="idAsignatura">ID Asignaturas(separar con ","):</label>
                <input type="text" id="idAsignatura" name="idAsignatura">
                <input type="submit" value="Agregar">
            </form>
        </div>
        <div class="form-container">
            <form action="/borrarMatriculas" method="post">
                <h2>Borrar Matriculas</h2>
                <label for="dni_borrar">ID:</label>
                <input type="text" id="id" name="id">
                <input type="submit" value="Borrar">
            </form>
        </div>
        <div class="form-container">
            <form action="/editarMatriculas" method="post">
                <h2>Editar Matriculas</h2>
                <label for="dni">DNI:</label>
                <input type="text" id="dni" name="dni">
                <label for="anio">Año:</label>
                <input type="text" id="anio" name="anio">
                <label for="id">ID:</label>
                <input type="text" id="id" name="id">
                <input type="submit" value="Editar">
            </form>
        </div>
        <div class="form-container">
        <form action="/mostrarMatriculas" method="post">
            <h2>Mostrar Matriculas</h2>
            <label for="dni_mostrar">ID:</label>
            <input type="text" id="id" name="id">
            <input type="submit" value="Mostrar">
        </form>
        </div>
        <div class="form-container">
            <form action="/mostrarMatriculastodos" method="post">
                <h2>Mostrar Todas las Matriculas</h2>
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
