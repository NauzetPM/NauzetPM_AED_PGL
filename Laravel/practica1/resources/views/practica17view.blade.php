<!DOCTYPE html>
<html>
<head>
    <title>Crear Directorio</title>
</head>
<body>
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <form method="POST" action="/practica17p">
        @csrf
        <label for="nombre">Nombre del Directorio:</label>
        <input type="text" name="nombre" required>
        <button type="submit">Crear Directorio</button>
    </form>
</body>
</html>
