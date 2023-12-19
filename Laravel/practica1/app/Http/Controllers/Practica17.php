<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Practica17 extends Controller
{
    public function mostrarFormulario()
    {
        return view('practica17view');
    }

    public function crearDirectorio(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
        ]);

        $nombreDirectorio = $request->input('nombre');
        Storage::makeDirectory($nombreDirectorio);
        return redirect('/practica17')->with('success', 'Directorio creado con éxito.');
    }
}
