
<?php

$fp = fopen("file.dat", "rw+");

if (flock($fp, LOCK_EX)) {  // adquirir un bloqueo exclusivo
    if(filesize("file.dat") == 0){
        $contador = 0;
    }else{
        $contador = fread($fp,filesize("file.dat"));
    }
    
    $contador = $contador??0;
    $contador++;
    ftruncate($fp, 0);      // truncar el fichero
    rewind($fp);

    fwrite($fp, $contador);
    //fflush($fp);            // volcar la salida antes de liberar el bloqueo
    flock($fp, LOCK_UN);    // libera el bloqueo
    echo "$contador <br>";
} else {
    echo "¡No se pudo obtener el bloqueo!";
}

fclose($fp);

?>