<?php 
$numero = 3102;

$longitud = strlen($numero);
$cadena = "";
$multiplicar=1;
 for ($i=1; $i <= $longitud; $i++) { 
    
    if($i>1){
        $multiplicar=$multiplicar*10;
    }
    $actual=substr($numero,-$i,1);
    if($i==$longitud){
        $cadena .= "$actual * $multiplicar ";
    }else{
    $cadena .= "$actual * $multiplicar +";
    }
    }

echo "$cadena";
?>