<?php
$file = file_get_contents('./prueba.txt');
$array=unserialize($file);
print_r($array);
?>