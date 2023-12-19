<form action="prueba.php" method="POST">

<?php
    require_once("array_nombres.php");
    echo "<input type='text' name=\"entrevistado\" id=\"entrevistado\" placeholder=\"Encuestado\"><br>";
    foreach ($array_nombres as $key => $nombre) {
        echo $key;
        echo "<input type=\"text\" name=\"$key\"  placeholder=\"$nombre\"/><br>";
        
    }
    echo "<input type=\"submit\" value=\"enviar\" placeholder=\"enviar\"/><br>";
?>

</form>