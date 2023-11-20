<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GestorUsuarios extends Controller
{
    public function register(Request $request)
    {
        // Obtén los datos del usuario desde $request o de alguna otra fuente
        $nombre = $request->input('nombre');
        $email = $request->input('email');
        $password = $request->input('password');

        $gf = new GestorFicheroCsv;
        $datos = [$nombre, $email, $password];
        $archivoUsuarios = 'usuarios.csv';
        $gf->agregar($archivoUsuarios, $datos);

        // Redirige a la vista de login
        return view('loginview');
    }

    public function logearse(Request $request){
        $archivoUsuarios = 'usuarios.csv';
        $gf = new GestorFicheroCsv;
        $contenido = $gf->leerFichero($archivoUsuarios);

        if ($contenido !== null) {
            foreach ($contenido as $fila) {
                // Compara el nombre y la contraseña con los datos del archivo
                if ($fila[0] === $request->nombre && $fila[2] === $request->password) {

                    return view('mostrarUsers', compact('contenido'));
                }
            }
        }
        //no existe la view
        return view('usuarioNoEncontrado');
    }
    public function logout(){
        session()->flush();
        session()->regenerate();

        return view("loginview");
    }
}
