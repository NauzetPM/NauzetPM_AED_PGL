<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Practica15 extends Controller
{
    public function mostrarFormulario()
    {
        return view('practica15view');
    }

    public function procesarFormulario(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'edad' => 'required|numeric',

        ]);

        session(['nombre' => $request->input('nombre')]);
        session(['edad' => $request->input('edad')]);

        //->with('success', 'Datos guardados en la sesión.'); guarda en success el mensaje pasado
        return view('/practica15view');
    }
}

