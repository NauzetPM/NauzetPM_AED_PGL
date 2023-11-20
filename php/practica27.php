<?php
$array=[7,2,8,1,9,4];
$arraySearch=array_search(4,$array);
echo "El array entero es: <br>";
print_r($array);
echo "<br> El array Search queda: $arraySearch";

function cmp($a, $b){
    return $a <=> $b;
}
usort($array, "cmp");
echo "El array entero Ordenado es: <br>";
print_r($array);
echo "<br> El array Search queda: $arraySearch";
?>