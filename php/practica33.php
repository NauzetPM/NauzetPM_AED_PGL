<?php
$texto='Pasando datos diría.. que hay que usar urlencode';

$conUrlEncode = urlencode($texto);
$sinUrlEncode =$texto;
echo "<a href=practica33.php?prueba=$conUrlEncode&prueba2=$sinUrlEncode>pasando datos</a>";
$recibido = $_GET["prueba"] ?? "nadita";
$recibido2 = $_GET["prueba"] ?? "nadita";
echo "<h3>se ha recibido:</h3>";
echo "prueba: ". $recibido . "<br>";
echo "<h3>se ha recibido2:</h3>";
echo "prueba: ". $recibido2 . "<br>";
?>
