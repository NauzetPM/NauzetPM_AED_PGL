<?php
$array=["Joel","Moises","Julio","Owen","Patricia","Ruben","Nathan","Saul","Juanma","Javier","Cristian","Alberto","Angel","Nauzet"];
$file = 'prueba.txt';




    // Open the file to get existing content
    /*$current = file_get_contents($file);
    $current = array;*/
    // Write the contents back to the file
    file_put_contents($file, array(serialize($array)));



?>