<?php
Class GenerarnumsController{
    public static function generarNumAleatorio(){
        $numElegido=random_int(0,10);
        if(!file_exists("app/model/numAleatorio.txt")){
            file_put_contents("app/model/numAleatorio.txt", $numElegido);
        }
    }
    public static function generarNuevoNumero(){
        $numElegido=random_int(0,10);
            file_put_contents("app/model/numAleatorio.txt", $numElegido);
    }
}


?>