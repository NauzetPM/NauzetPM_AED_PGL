<?php
    require_once("array_nombres.php");
    if(file_exists("./datos.txt")){
        $file = file_get_contents('./datos.txt');
        $array=unserialize($file);
    }
    
    $nombrePersona=$_POST["entrevistado"]??"";
    $array2=[];
    foreach ($array_nombres as $key => $value) {
        if($value!=$nombrePersona){
            $valor=$_POST[$key];
            $array2[$key]=$valor;
        }

    }
    $array[$nombrePersona]=$array2;
    file_put_contents("datos.txt",serialize($array));

    //mostrar array
    foreach ($array as $key => $value) {
        echo "<br>Nombre :$key Valores:<br>";
        foreach ($value as $key2 => $value2) {
            if($key!=$key2){
                echo "$key2 = $value2 ;";
            }
            
        }
    }
   
    //Hacer parejas
    //id01id02 10
    $arrayTemp=[];
    $arrayParejas=[];
    //comprobar quien va solo
    foreach ($array as $key => $value) {
        //key id del que respondio
        //value array nombre 
        $idKey=array_search($key,$array_nombres);
        $valor=0;
        foreach ($value as $key2 => $value2) {
            //key2 id
            //value2 nota
            $valor+=(int)$value2;
        }
        if($valor==0){
            $arrayTemp[$idKey.$idKey]=100;
        }
    }
    //creo array id01id02 = suma
    foreach ($array as $key => $value) {
        //key id del que respondio
        //value array nombre
        $idKey=array_search($key,$array_nombres);
        //echo"key es $key y value es:";
        //print_r($value);
        foreach ($value as $key2 => $value2) {
            $nombre=$array_nombres[$key2];
                    $arrayValores=$array[$nombre]??[];
                    //print_r($arrayValores);
                    //echo"valor que dio $key2 a $idKey =$arrayValores[$idKey]";
                    if(isset($arrayValores[$idKey])){
                        $valor=$arrayValores[$idKey]??0;
                    
                        $suma=((int)($vaule2??0))+((int)($valor??0));
                        if( strcmp( $idKey , $key2))
                            $arrayTemp[$idKey.$key2]=$suma;
                    }    
        }
    }
    arsort($arrayTemp);
    
    //meto en el array parejas 
    foreach ($arrayTemp as $key => $value) {
       $id01=substr($key,0,4);
       $id02=substr($key,4,8);
       
       if(!isset($arrayParejas[$array_nombres[$id01]]) && !isset($arrayParejas[$array_nombres[$id02]])){
        echo"id1:$id01 id2:$id02 <br>";
        $arrayParejas[$array_nombres[$id01]]=$array_nombres[$id02];
       }
    }

    echo "<br>";echo "<br>";
    //mostrar parejas
    //if(file_exists("./timer.txt")){
      /*  $fileTimer = file_get_contents('./timer.txt');
        $timer=unserialize($fileTimer);
        $horaMostrar=$timer+(60*60);*/
        //if($horaMostrar>=timer()){
        foreach ($arrayParejas as $key => $value) {
            echo "$key va con $value";
            echo "<br>";
        }
        echo "<br>";
        echo "<br>";
        print_r($arrayParejas);
        //}
    //}


    ?>
