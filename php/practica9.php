<?php
const num=2;
$cadena=" ";
for ($i=1; $i <= 9; $i++) { 
    $exponente=num**$i;
    $cadena .= "$exponente<br>";
}
echo $cadena;

?>