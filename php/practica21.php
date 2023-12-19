<?php
$array=[];
for ($i=1; $i <= 10; $i++) { 
$array[]=$i;
print_r($array);
echo "<br>";

}
echo "<br>ahora los pop<br><br>";
for ($i=1; $i <= 5; $i++) { 
    $va = array_pop($array);
    echo "el array ahora queda: <br>";
    print_r($array);
    echo "<br>el valor extraido es: " . $va;
}


?>