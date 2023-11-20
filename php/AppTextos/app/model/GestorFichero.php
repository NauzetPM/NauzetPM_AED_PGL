<?php
    require("Entradas.php");

    class GestorFichero{
        private $nombre = "app/textos.dat";

        public function __construct(){
        }

        public function agregar(Entradas $entrada){
            $file = array();

            $fp = fopen($this->nombre, "c+");

            if (flock($fp, LOCK_EX)) {  // acquire an exclusive lock
                if(filesize($this->nombre) == 0){
                    $file[] = $entrada;
                }else{
                    $file = unserialize(fread($fp, filesize($this->nombre)));
                    $file[] = $entrada;
                }
                rewind($fp);
                fwrite($fp, serialize($file));
                //fflush($fp);            // flush output before releasing the lock
                flock($fp, LOCK_UN);    // release the lock
            } else {
                echo "¡No se pudo obtener el bloque!";
            }

            fclose($fp);
        }

        public function borrar($autor){

            $fp = fopen($this->nombre, "r+");

            $nuevoArray = array();

            if (flock($fp, LOCK_EX)) {  // acquire an exclusive lock
        
                $file = unserialize(fread($fp, filesize($this->nombre)));
               
                foreach($file as $key => $value){
                    if(!($value->autor == $autor)){
                        $nuevoArray[] = $value;
                    }
                }
                rewind($fp);
                fwrite($fp, serialize($nuevoArray));
                flock($fp, LOCK_UN);    // release the lock
            } else {
                echo "¡No se pudo obtener el bloque!";
            }

            fclose($fp);
       }

        public function modificar(int $id, Entradas $entrada){
        
        

            $this->borrar($id);

            $this->agregar($entrada);
        }

        public function filtrar(string $autor): String{
            $lista = "";

            $fp = fopen($this->nombre, "r");

            if (flock($fp, LOCK_EX)) { 
                $file = unserialize(fread($fp, filesize($this->nombre)));

                foreach($file as $key => $value){
                    if($value->autor == $autor){
                        $lista .= "<br>".$value->__toString();
                    }
                }

                flock($fp, LOCK_UN);
            } else {
                echo "¡No se pudo obtener el bloque!";
            }

            fclose($fp);


            return $lista;
        }

        public function ver(): String{
            $lista = "";

            $fp = fopen($this->nombre, "r");

            if (flock($fp, LOCK_EX)) { 
                $file = unserialize(fread($fp, filesize($this->nombre)));

                foreach($file as $key => $value){
                    $lista .= "<br>".$value->__toString();
                }

                flock($fp, LOCK_UN);
            } else {
                echo "¡No se pudo obtener el bloque!";
            }

            fclose($fp);

            return $lista;
        }
    }

?>  