<?php
    class Entradas{
        public $autor;
        public $titulo;
        public $contenido;
        public $fecha;

        public function __construct(string $autor, string $titulo, 
        string $contenido, string $fecha){
            $this->autor = $autor;
            $this->titulo = $titulo;
            $this->contenido = $contenido;
            $this->fecha = $fecha;
        }

        public function __toString():string{
            return 
             "Autor: " . $this->autor . "; " 
            . "Titulo: " . $this->titulo . "; " 
            . "contenido: " . $this->contenido . "; " 
            . "Fecha: " . $this->fecha
            ;
        }

   

    }

?>