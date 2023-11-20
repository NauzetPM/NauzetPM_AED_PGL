<?php
$unavar = 1.3;
var_dump($unavar);
echo "<br>";
$unavar = (int) $unavar;
var_dump($unavar);
/*
Antes del cast te devulve un float(1.3)
Despues del cast te devuelve un int(1)
*/ 
?>