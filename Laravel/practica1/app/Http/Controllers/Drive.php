<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Drive extends Controller
{
    public function register(Request $request)
    {
        session()->flush();
        session()->regenerate();
        // Obtén los datos del usuario desde $request o de alguna otra fuente
        $nombre = $request->input('nombre');
        $nick = $request->input('nick');
        $password = $request->input('password');
        //Comprobar que el usuario no exista
        $archivoUsuarios = 'usuariosDrive.csv';
        $gf = new GestorFicheroCsv;
        $contenido = $gf->leerFichero($archivoUsuarios);

        if ($contenido !== null) {
            foreach ($contenido as $fila) {
                // Compara el nombre y la contraseña con los datos del archivo
                if ($fila[0] === $request->nick) {
                    //Meter en secion el nombre
                    //session()->

                    $arrayMensaje=[];
                    $arrayMensaje[0]="usuario no valido";
                    return view('registerDriveview', compact('arrayMensaje'));
                }
            }
        }


        $gf = new GestorFicheroCsv;
        $datos = [$nombre, $nick, $password];
        $archivoUsuarios = 'usuariosDrive.csv';
        $gf->agregar($archivoUsuarios, $datos);
        session()->put('nick' , $request->nick);
        $this->crearDirectorio($request);
        // Redirige a la vista de login
        return redirect('listaFicherosdrive');
    }
    public function listaFicheros()
    {
        $carpeta = session()->get("nick");
        $files = Storage::files($carpeta);

        return view('driveMostrar', compact('files', 'carpeta'));
    }
    public function logearse(Request $request){
        session()->flush();
        session()->regenerate();
        $archivoUsuarios = 'usuariosDrive.csv';
        $gf = new GestorFicheroCsv;
        $contenido = $gf->leerFichero($archivoUsuarios);

        if ($contenido !== null) {
            foreach ($contenido as $fila) {
                // Compara el nombre y la contraseña con los datos del archivo
                if ($fila[1] === $request->nick && $fila[2] === $request->password) {
                    //Meter en secion el nick
                    session()->put('nick' , $request->nick);
                    //cambiar ruta
                    return redirect('listaFicherosdrive');
                }
            }
        }
        //no existe la view
        return view('loginDriveview', compact('arrayMensaje'));
    }
    public function logout(){
        session()->flush();
        session()->regenerate();

        return view("loginview");
    }

    public function crearDirectorio(Request $request)
    {
        $nombreDirectorio = session()->get("nick");
        Storage::makeDirectory($nombreDirectorio);
        return redirect('/practica17')->with('success', 'Directorio creado con éxito.');
    }
    public function subirArchivo(Request $request){
        $file = $request->myfile;
        $nombrefichero = $file->getClientOriginalName();
        $path = $file->storeAs("/".session()->get("nick"), $nombrefichero);
        return redirect('listaFicherosdrive');
    }
    public function descargar($carpeta,$archivo)
    {
        $ruta = storage_path("app/".$carpeta."/". $archivo);
        return response()->download($ruta, basename($ruta));
    }
    public function eliminar($carpeta,$archivo)
    {
        Storage::delete( $carpeta."/" . $archivo);

        $this->listaFicheros();
        return redirect("listaFicherosdrive");
    }
}
