<?php
//Ej de in_array

 $os = array("Mac", "NT", "Irix", "Linux");
 if (in_array("Irix", $os)) {
 echo "Existe Irix";
 }
 if (in_array("mac", $os)) {
 echo "Existe mac";
 }
 ?>

<?php
//Ej de in_array
 $a = array('1.10', 12.4, 1.13);
 if (in_array('12.4', $a, true)) {
 echo "Se encontró '12.4' con comprobación estricta\n";
 }
 if (in_array(1.13, $a, true)) {
 echo "Se encontró 1.13 con comprobación estricta\n";
 }
 ?>
 <?php
 //Ej de arra_search
 $array = array(0 => 'azul', 1 => 'rojo', 2 => 'verde', 3 => 'rojo');
 $clave = array_search('verde', $array);
 echo $clave . "<br>";
 $clave = array_search('marrón', $array);
 if( $clave === FALSE)
 echo "no se ha localizado el valor";
 else
 echo $clave;
 ?>
<?php
//Ej de array_values
 $array = array('azul', 'rojo', 'verde', 'amarillo', "blanco");
 unset($array[2]);
 unset($array[3]);

 print_r($array);

 //ahora usando array_values "limpiamos"
 $array = array_values($array);
 echo "<br>";
 print_r($array);
 ?>