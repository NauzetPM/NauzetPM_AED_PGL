<?php

    class GestorarticulosController{

        public function index($args){

            $this->iniciar($args);
        }

        public function iniciar($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> iniciar();
        }

        public function llamarVistaCrear($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> crear();
        }

        public function llamarVistaModificar($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> modificar();
        }

        public function llamarVistaVer($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> ver($args);
        }


        public function volverPagInicio($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> vueltaInicio();
        }

        public function llamarVistaBorrar($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> borrar();
        }

        public function llamarVistaError($args){
            require_once("app/view/GestorarticulosView.php");

            $vista = new GestorarticulosView();

            $vista -> mostrarError($args);
        }

        public function verArticulos($args){
            require_once("app/model/GestorFichero.php");

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> ver();

            $this-> llamarVistaVer($lista);
        }

        public function filtrarArticulos($args){
            require_once("app/model/GestorFichero.php");
            $categoria = $_POST["categoriaArticulo"]?? null;

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> filtrar($categoria);

            $this-> llamarVistaVer($lista);
        }

        public function borrarArticulo($args){
            require_once("app/model/GestorFichero.php");
            $id = $_POST["idArticulo"]?? null;

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> ver();

            if(!(str_contains($lista,"ID: ".$id))){
                $error = "No se puede borrar el articulo, no existe un articulo con la id: " . $id;
                $this->llamarVistaError($error);
            }else{
                
                $gestorFichero = new GestorFichero();

                $gestorFichero -> borrar($id);
    
                $this -> volverPagInicio($args);}


        }

        public function modificarArticulo($args){
            require_once("app/model/GestorFichero.php");
            require_once("app/model/Articulo.php");

            $id = $_POST["idArticulo"]?? null;
            $nombre = $_POST["nombreArticulo"] ?? "";
            $categoria = $_POST["categoriaArticulo"] ?? "";
            $stock = $_POST["stockArticulo"] ?? null;
            $precio = $_POST["precioArticulo"] ?? null;

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> ver();

            if(!(str_contains($lista,"ID: ".$id))){
                $error = "No se puede moficiar el articulo, no existe un articulo con la id: " . $id;
                $this->llamarVistaError($error);
            }else{
                $articulo = new Articulo($id,$nombre,$categoria,$stock,$precio);
                $gestorFichero = new GestorFichero();
    
                $gestorFichero -> modificar($id, $articulo);
    
                $this -> volverPagInicio($args);
            }

        }

        public function crearArticulo($args){
            require_once("app/model/GestorFichero.php");
            require_once("app/model/Articulo.php");

            $id = $_POST["idArticulo"] ?? null;
            $nombre = $_POST["nombreArticulo"] ?? "";
            $categoria = $_POST["categoriaArticulo"] ?? "";
            $stock = $_POST["stockArticulo"] ?? null;
            $precio = $_POST["precioArticulo"] ?? null;

            $gestorFichero = new GestorFichero();

            $lista = $gestorFichero -> ver();

            if(str_contains($lista,"ID: ".$id)){
                $error = "Ya existe un articulo con la id: " . $id;
                $this->llamarVistaError($error);
            }else{

                $articulo = new Articulo($id,$nombre,$categoria,$stock,$precio);
                $gestorFichero = new GestorFichero();

                $gestorFichero->agregar($articulo);
            
                $this->volverPagInicio($args);
            }
        }

        
    }

    

?>