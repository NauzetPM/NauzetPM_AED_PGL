<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Validación de Datos</title>
</head>
<body>
    <h1>Validación de Datos</h1>
    
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" >
        <br>

        <label for="correo">Correo:</label>
        <input type="email" name="correo" id="correo" >
        <br>

        <label>Género:</label>
        <input type="radio" name="genero" id="genero" value="Masculino" >
        <label for="masculino">Masculino</label>
        <input type="radio" name="genero" id="genero" value="Femenino" >
        <label for="femenino">Femenino</label>
        <input type="radio" name="genero" id="genero" value="Otro" >
        <label for="otro">Otro</label>
        <br>
        <label>Comentario:</label>
        <input type="text" name="comentario" id="comentario" >
        <br>

        <input type="submit" value="Enviar">
    </form>
    
    <?php
    //if($_SERVER["REQUEST_METHOD"]== "POST"){
        $nombre = $_POST["nombre"]??"";
        $correo = $_POST["correo"]??"";
        $genero = $_POST["genero"]??"";
        $comentario=$_POST["comentario"]??"";
        $errores = array();

        // Nombre
        if (empty($nombre)) {
            $errores[] = "El campo Nombre no puede estar vacío.";
        }
        
        //Comentario
        if (empty($comentario)) {
            $errores[] = "El campo Comentario no puede estar vacío.";
        }

        //No entiendo muy bien lo que hace lo copie de internet
        if (empty($correo)) {
            $errores[] = "El campo correo no puede estar vacío.";
        }else{
            if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                $errores[] = "El correo electrónico no es válido.";
            }
        }
        


        // Genero
        if (empty($genero)) {
            $errores[] = "Debes seleccionar un género.";
        }

        // Errores
        if (!empty($errores)) {
            echo "<h2 style='color: red;'>Errores:</h2>";
            echo "<ul>";
            foreach ($errores as $error) {
                echo "<li>$error</li>";
            }
            echo "</ul>";
        } else {
            echo "Datos ingresados";
        }

    //}
    ?>
</body>
</html>