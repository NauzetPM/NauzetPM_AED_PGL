<?php
$array =[];
for ($i=0; $i < 10; $i++) { 
    $array[$i]=rand(20,25);
}
echo "array Completo:   ";
//var_dump($array);
print_r($array);
echo "<br>Search:   ";
$busqueda =array_search(22,$array);    
echo $busqueda;

?>