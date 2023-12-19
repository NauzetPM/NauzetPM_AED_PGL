<?php
    class Articulo{
        public $id;
        public $nombre;
        public $categoria;
        public $cantidad;
        public $precio;

        public function __construct(int $id,string $nombre, string $categoria, 
        int $cantidad, float $precio){
            $this->id = $id;
            $this->nombre = $nombre;
            $this->categoria = $categoria;
            $this->cantidad = $cantidad;
            $this->precio = $precio;
        }

        public function __toString():string{
            return "ID: ".$this->id . "; " 
            . "Nombre: " . $this->nombre . "; " 
            . "Categoria: " . $this->categoria . "; " 
            . "Cantidad: " . $this->cantidad . "; " 
            . "Precio: " . $this->precio
            ;
        }

   

    }

?>