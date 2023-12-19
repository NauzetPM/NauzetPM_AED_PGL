<?php
$un_bool = TRUE; // un valor booleano
$un_str = "foo"; // una cadena de caracteres
$un_str2 = 'foo'; // una cadena de caracteres
$un_int = 12; // un número entero
echo gettype($un_bool); // imprime: boolean
echo gettype($un_str); // imprime: string
// Si este valor es un entero, incrementarlo en cuatro
if (is_int($un_int)) {
$un_int += 4;
}
// Si $un_bool es una cadena, imprimirla
// (no imprime nada)
if (is_string($un_bool)) {
echo "Cadena: $un_bool";
}

/*
$variable=$un_str+$un_int;
echo "Suma $variable"; 
Me da un error al ejecutarlo por el tipo de dato

*/
/*
$variable=$un_str+$un_str2;
echo "Suma $variable"; 
Me da un error al ejecutarlo por el tipo de dato
*/
/*
$variable=$un_str.$un_str;
echo "Suma $variable"; 
Para contatenar es con el .
*/
?>