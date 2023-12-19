<?php
require_once("app/view/GenerarIndexView.php");
require_once("app/GenerarnumsController.php");
class ManejarintentosController{

        public static function mostrarform($args){
            GenerarIndexView::crearIndex();
        }
        public static function ganar(){
            $fileIntentos = 'app/model/intentos.txt';
            file_get_contents($fileIntentos, serialize([]));
            //unlink($fileIntentos);
            GenerarnumsController::generarNuevoNumero();
        }
        public function comprobarintento($args) {
            $intento = $_POST["intento"] ?? -1;
            $fileIntentos = 'app/model/intentos.txt';
            $fileNumAleatorio = 'app/model/numAleatorio.txt';
    
            if (file_exists($fileIntentos)) {
                $fileContent = file_get_contents($fileIntentos);
                $arrayIntentos = unserialize($fileContent) ?? [];
            } else {
                $arrayIntentos = [];
            }
    
            if (file_exists($fileNumAleatorio)) {
                $numAleatorio = file_get_contents($fileNumAleatorio);
                $mensaje = "";
    
                if ($numAleatorio > $intento) {
                    $mensaje = "aleatorio > $intento<br>";
                } else if ($numAleatorio < $intento) {
                    $mensaje = "aleatorio < $intento<br>";
                } else {
                    $mensaje = "Ganaste!!!!<br>";
                    ManejarintentosController::ganar();
                    // Coloca aquí la lógica para la condición de victoria.
                }
    
                $arrayIntentos[] = $mensaje;
                file_put_contents($fileIntentos, serialize($arrayIntentos));
                GenerarIndexView::crearindex();
            } else {
                echo "Error: número aleatorio no generado";
            }
        }
    }
    
    ?>
