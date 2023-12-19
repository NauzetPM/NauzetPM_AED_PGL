<?php

    class TextosController{

        public function index($args){

            $this->iniciar($args);
        }

        public function iniciar($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> iniciar();
        }

        public function crear($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> crear();
        }


        public function llamarVistaVer($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> ver($args);
        }


        public function volverPagInicio($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> vueltaInicio();
        }

        public function llamarVistaBorrar($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> borrar();
        }

        public function llamarVistaError($args){
            require_once("app/view/TextosView.php");

            $vista = new TextosView();

            $vista -> mostrarError($args);
        }

        public function mostrar($args){
            require_once("app/model/GestorFichero.php");
            $categoria = $_POST["autor"]?? null;
            if($categoria!=null){
                $gestorFichero = new GestorFichero();

                $lista = $gestorFichero -> filtrar($categoria);
            }else{
                $gestorFichero = new GestorFichero();

                $lista = $gestorFichero -> ver();
            }
            

            $this-> llamarVistaVer($lista);
        }


        public function borrar($args){
            require_once("app/model/GestorFichero.php");
            $autor = $_POST["autor"]?? null;

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> ver();

            if(!(str_contains($lista,"Autor: ".$autor))){
                $error = "No existen entradas de " . $autor;
                $this->llamarVistaError($error);
            }else{
                
                $gestorFichero = new GestorFichero();

                $gestorFichero -> borrar($autor);
    
                $this -> volverPagInicio($args);}


        }


        public function crearEntrada($args){
            require_once("app/model/GestorFichero.php");
            require_once("app/model/Entradas.php");

            $autor = $_POST["autor"] ?? "";
            $titulo = $_POST["titulo"] ?? "";
            $contenido = $_POST["contenido"] ?? "";

            $gestorFichero = new GestorFichero();
            $unixtime = time();

            $fechaFormateada = date('Y-m-d H:i:s', $unixtime);

            $entrada = new Entradas($autor,$titulo,$contenido,$fechaFormateada);
            $gestorFichero = new GestorFichero();

            $gestorFichero->agregar($entrada);
        
            $this->volverPagInicio($args);
        }

        
    }

    

?>