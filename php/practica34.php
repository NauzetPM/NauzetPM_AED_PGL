<?php
    echo "<a href=index.php?prueba='Pasando datos diría.. que hay que usar urlencode'>Pasando datos</a>";
    $conUrlEncode = urlencode('Pasando datos diría.. que hay que usar urlencode');
    echo "<a href=index.php?prueba2=$conUrlEncode>Pasando datos</a>";
    
    $recibido = $_GET["prueba"] ?? "nadita";
    $recibido2 = $_GET["prueba2"] ?? "nadita";

    echo "<h3>Se ha recibido:</h3>";
    echo "prueba: " . $recibido . "<br>";
    echo "prueba2: " . $recibido2 . "<br>";

foreach ($_GET as $key => $value) {
    echo "$key: $value <br>";
}

?>