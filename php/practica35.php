<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tabla de Multiplicar</title>
</head>
<body>
    <h1>Tabla de Multiplicar</h1>
    
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
        <label for="numero">Introduce un número entero positivo:</label>
        <input type="text" name="numero" id="numero">
        <input type="submit" value="Mostrar tabla">
    </form>
    
    <?php
    
    if (isset($_POST['numero'])) {
        $numero = $_POST["numero"];
        
        if (is_int((int)$numero) && (int)$numero > 0) {
            echo "<h2>Tabla de multiplicar del número $numero:</h2>";
            echo "<table border='1'>";
            for ($i = 1; $i <= 10; $i++) {
                $resultado = $numero * $i;
                echo "<tr><td>$numero * $i</td><td>$resultado</td></tr>";
            }
            echo "</table>";
        } else {
            echo "<p>Por favor, introduce un número entero positivo válido.</p>";
        }
    }
    ?>
</body>
</html>
