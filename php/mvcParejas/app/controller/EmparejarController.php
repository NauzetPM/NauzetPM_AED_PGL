<?php
EmparejarController::calcularParejas(); 
class EmparejarController{
    public function __construct(){
    }
    public static function calcularParejas(){
        require_once ("app/model/array_nombres.php");
        if(file_exists("app/model/datos.txt")){
            $file = file_get_contents('app/model/datos.txt');
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
        file_put_contents("app/model/datos.txt",serialize($array));
        $arrayTemp=[];
        $arrayParejas=[];

    foreach ($array as $key => $value) {

        $idKey=array_search($key,$array_nombres);
        $valor=0;
        foreach ($value as $key2 => $value2) {

            $valor+=(int)$value2;
        }
        if($valor==0){
            $arrayTemp[$idKey.$idKey]=100;
        }
    }

    foreach ($array as $key => $value) {
        $idKey=array_search($key,$array_nombres);
        foreach ($value as $key2 => $value2) {
            $nombre=$array_nombres[$key2];
           
                
                    $arrayValores=$array[$nombre]??[];
                    if(isset($arrayValores[$idKey])){
                        $valor=$arrayValores[$idKey]??0;
                    
                        $suma=((int)($vaule2??0))+((int)($valor??0));
                        if( strcmp( $idKey , $key2))
                            $arrayTemp[$idKey.$key2]=$suma;
                    }    
        }
    }

    
    //meto en el array parejas 
    foreach ($arrayTemp as $key => $value) {
       $id01=substr($key,0,4);
       $id02=substr($key,4,8);
       
       if(!isset($arrayParejas[$array_nombres[$id01]]) && !isset($arrayParejas[$array_nombres[$id02]])){
        $arrayParejas[$array_nombres[$id01]]=$array_nombres[$id02];
       }
    }
    if( file_exists('app/view/EmparejarView.php')){
        require_once('app/view/EmparejarView.php');
        $vista = new EmparejarView();
        $vista->mostrar($arrayParejas);
    }else{
        echo "el fichero no existe";
    }
    
    }
}
    ?>
