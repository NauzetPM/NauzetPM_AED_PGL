<?php

$array = [];
$tamanio = 20;
$min=10;
$max=20;
echo "Tamaño del array: $tamanio <br>";

for ($i = 0; $i < $tamanio; $i++) {
    $array[] = rand($min, $max);
}

echo "El array es: ";
mostrarArray($array);

function mostrarArray($array)
{
    foreach ($array as $key => $value) {
        echo "  posición: $key valor: $value || ";
    }
}

$repeticiones = array_count_values($array);
arsort($repeticiones);

echo "<br>arrayFinal: ";
foreach ($repeticiones as $dato => $cantidad) {
    echo "$dato => $cantidad ";
}
/*
$array=[];
$arrayfinal=[];
//$tamanio=rand(10,20);
$tamanio=5;
echo "tamañio array ".$tamanio;
for ($i=0; $i < $tamanio; $i++) { 
    //$array[$i]=rand(1,20);
    $array[$i]=rand(1,5);
}
echo "<br>El array es: ";
mostrarArray($array);
function mostrarArray($array){
    foreach ($array as $key => $value) {
        echo "posicion: $key valor: $value     ";
    }
}
function cmp($a, $b){
     return $a <=> $b;
 }
 usort($array, "cmp");
 $repeticiones=1;

 
 for ($i=0; $i < $tamanio-1; $i++) { 
    if($array[$i]==$array[$i+1]){
        $repeticiones++;
    }else{
        //echo "<br> $array[$i] => $repeticiones repeticiones";
        //array_push($arrayfinal,$repeticiones => $i);
        $arrayfinal["a".$array[$i]]=$repeticiones;
        $repeticiones=1;
    }
 }
 echo "<br> arrayFinal:";
 usort($arrayfinal, "cmp");
 mostrarArray($arrayfinal);
 */



?>