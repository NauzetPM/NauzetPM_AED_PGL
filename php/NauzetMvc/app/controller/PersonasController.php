<?php
class PersonasController
{

    // Declaración de un método
    public function saludar() {
        if( file_exists('app/view/PersonasView.php')){
            require_once('app/view/PersonasView.php');
            $vista = new PersonasView();
            $vista->mostrar([]);
        }else{
            echo "el fichero no existe";
        }
    }
}


?>