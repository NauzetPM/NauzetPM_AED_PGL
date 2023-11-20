<?php

namespace App\Models;

use Illuminate\Http\Request;

class GestorFicheroCsv 
{
    function leerFichero(string $nombrefichero){
        $contenido=[];
        if (($open = fopen(storage_path() . "/".$nombrefichero, "r")) !== FALSE) {
        while (($data = fgetcsv($open, 1000, ",")) !== FALSE) {
        $contenido[] = $data;
        }
        fclose($open);
        return $contenido;
        }
        return null;
        }
        function agregar($nombreArchivo, $data) {
            $rutaArchivo = storage_path() . "/" . $nombreArchivo;

            if (($file = fopen($rutaArchivo, "a")) !== FALSE) {
                fputcsv($file, $data);
                fclose($file);
                return true;
            }

            return false;
        }
}
