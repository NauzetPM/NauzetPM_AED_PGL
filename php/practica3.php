<?php
declare( strict_types=1);
/*
En el primer intento se muestra el echo de la funcion dentro del php
*/ 
/*En el segundo intento da un error en la declaracion*/
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<?php
function sum( int $a, int $b): int {
return $a + $b;
}
echo "<p> la suma de uno más dos es: ";
$resultado = sum(1,2);
print sum(1,2);
echo "</p>"
?>
</body>
</html>





