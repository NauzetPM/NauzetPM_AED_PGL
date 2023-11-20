<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Practica18 extends Controller
{
    public function agregarDatosAlCsv()
    {
        $gf = new GestorFicheroCsv;
        $arrayDatos=["nombre","gmail"];
        $gf->agregar("Practica18CSV.csv",$arrayDatos);
    }

    public function leerDatos()
    {   
        $this->agregarDatosAlCsv();
        $gf = new GestorFicheroCsv;
        $arrayDatos=$gf->leerFichero("Practica18CSV.csv");
        return view('practica18view', compact('arrayDatos'));
    }
}
