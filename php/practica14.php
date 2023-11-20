<?php

    for($i=0;$i<10;$i++){
        if($i<10){
            $dato = 'dato0'.$i;
        }else{
        $dato = 'dato'.$i;
        }
        $$dato = $i;
    }

    echo "<br> $dato03 ";
    echo "<br> $dato08 ";
?>