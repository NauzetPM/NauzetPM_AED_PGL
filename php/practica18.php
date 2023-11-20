<?php
$array = ["a","a","a","a","a"];
$j=count($array);
foreach( $array as $key => $val){
$j--;
$array[$j] .= $j;
echo "<br>";
var_dump($array);
echo "<br> $key => $val"; //esta línea no tiene el efecto deseado
echo "<br> aqui es el array: $key => $array[$key]"; // aquí sí
echo "<br>";
}
?>