<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Usuario</title>
</head>
<body>
    <form method="POST" action="/practica15p">
        @csrf
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="{{ old('nombre', session('nombre')) }}"><br>

        <label for="edad">Edad:</label>
        <input type="text" name="edad" value="{{ old('edad', session('edad')) }}"><br>

        <!-- Agrega otros campos del usuario aquí -->

        <button type="submit">Enviar</button>
    </form>

    @if(session('nombre') || session('edad'))
        <p>Información almacenada en la sesión:</p>
        <p>Nombre: {{ session('nombre') }}</p>
        <p>Edad: {{ session('edad') }}</p>
    @endif
</body>
</html>

