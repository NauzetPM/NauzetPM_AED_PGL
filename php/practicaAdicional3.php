


<form action="practicaAdicional3.php" method="POST">

<?php
    $array=["Joel","Moises","Julio","Owen","Patricia","Ruben","Nathan","Saul","Juanma","Javier","Cristian","Alberto","Angel","Nauzet"];
    foreach ($array as $nombre) {
        echo "<input type=\"text\" name=\"$nombre\" placeholder=\"$nombre\"/><br>";
    }
    
    echo "<input type=\"submit\" value=\"enviar\" placeholder=\"enviar\"/><br>";
    //condicion 
    if($_SERVER["REQUEST_METHOD"]== "POST"){
    foreach ($array as $nombre) {
        echo "$nombre afinidad: $_POST[$nombre]";
    }
    }
?>
</form>
