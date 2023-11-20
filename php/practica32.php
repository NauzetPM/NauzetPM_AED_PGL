vars.php:
<?php
$color = 'verde';
$fruta = 'manzana';
?>
test.php:
<?php
echo "Una $fruta $color"; // Una
require 'vars1.php';
echo "Una $fruta $color"; 
?>