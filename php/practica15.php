<?php
$array = [];
$array[2]="mensaje";
$array[7]="lalala!";
$array[]="yepa yepa!!";
var_dump($array);

//No muestra valores antes del 2 ni entre el 2 y el 7 y el que no se le asigna posicion se pone en la siguiente mas alta en este caso la 8
?>