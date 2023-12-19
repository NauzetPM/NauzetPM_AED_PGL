<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Practica19 extends Controller
{
    public function listaFicheros()
    {
        $carpeta = 'Prueba';
        $files = Storage::files($carpeta);

        return view('practica19view', compact('files', 'carpeta'));
    }
    public function descargar($archivo)
    {
        $ruta = storage_path("app/Prueba/" . $archivo);
        return response()->download($ruta, basename($ruta));
    }
    public function eliminar($archivo)
    {
        Storage::delete("Prueba/" . $archivo);

        $this->listaFicheros();
        return redirect("/practica19");
    }
}
