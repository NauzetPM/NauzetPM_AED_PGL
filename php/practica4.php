<?php
declare( strict_types=1);
/*
La primera vez muestra un 2 y no da error
si descomento return $a; da un error por que la funcion debe devolver int no str
si descomento print fun("e",3); da un error
*/ 
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<?php
function fun( int $a, int $b): int {
$a = "o";
//return $a;
return $b ;
}
print fun(1,2);
//print fun("e",3);
echo "</p>"
?>
</body>
</html>