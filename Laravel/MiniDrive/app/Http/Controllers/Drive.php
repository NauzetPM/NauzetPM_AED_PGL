<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\GestorFicheroCsv;
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
        $ruta = session()->get("nick");
        session()->put('estoy' , $ruta);
        $files = Storage::files($ruta);
        $directorio = Storage::directories($ruta);
        return view('driveMostrar', compact('files', 'ruta','directorio'));
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
                    return redirect('listaFicherosdrive');
                }
            }
        }
        return view('loginDriveview', compact('arrayMensaje'));
    }
    public function logout(){
        session()->flush();
        session()->regenerate();

        return view("loginDriveview");
    }

    public function crearDirectorio(Request $request)
    {
        $nombreDirectorio = session()->get("nick");
        Storage::makeDirectory($nombreDirectorio);
    }
    public function subirArchivo(Request $request){
        $ruta= session()->get("estoy");
        $file = $request->myfile;
        $nombrefichero = $file->getClientOriginalName();
        $path = $file->storeAs("/".$ruta, $nombrefichero);
        $files = Storage::files($ruta);
        $directorio = Storage::directories($ruta);
        return view('driveMostrar', compact('files', 'ruta','directorio'));
    }
    public function descargar($archivo)
    {   

        $ruta = session()->get("estoy");
        $subsRutas = explode('/', $ruta);
        
        if(session()->get("nick")==$subsRutas[0]){
            $FinalRuta = storage_path("app/".$ruta."/". $archivo);
            return response()->download($FinalRuta, basename($FinalRuta));
        }return view("adondeVas");

    }
    public function eliminar($archivo)
    {
        $ruta = session()->get("estoy");
        $subsRutas = explode('/', $ruta);
        
        if(session()->get("nick")==$subsRutas[0]){
        Storage::delete( $ruta."/" . $archivo);
        $files = Storage::files($ruta);
        $directorio = Storage::directories($ruta);
        return view('driveMostrar', compact('files', 'ruta','directorio'));
        }return view("adondeVas");
    }
    //Para carpetas


    public function crearCarpeta(Request $request)
    {   $ruta = session()->get("estoy");
        $nombreDirectorio = $request->input('nombreCarpeta');
        Storage::makeDirectory($ruta."/".$nombreDirectorio);
        return redirect("cargarArchivos/$nombreDirectorio");
    }
    public function eliminarCarpeta($archivo)
    {
        $ruta = session()->get("estoy");
        $subsRutas = explode('/', $ruta);
        
        if(session()->get("nick")==$subsRutas[0]){
        Storage::deleteDirectory($ruta."/".$archivo);
        $files = Storage::files($ruta);
        $directorio = Storage::directories($ruta);
        return view('driveMostrar', compact('files', 'ruta','directorio'));
        }return view("adondeVas");
    }
    public function volver()
    {   
        $estoy = session()->get("estoy");
        if(strpos($estoy, '/') !== false){
            $subsRutas = explode('/', $estoy);
            array_pop($subsRutas); 
            $ruta = implode('/', $subsRutas);
            session()->put('estoy' , $ruta);
            //Leer Ficheros y mostrar 
            $files = Storage::files($ruta);
            $directorio = Storage::directories($ruta);
            return view('driveMostrar', compact('files', 'ruta','directorio'));
        }
        
        return redirect("listaFicherosdrive");
    }
    public function cargarArchivos($archivo)
    {   
        $estoy = session()->get("estoy");
        $ruta = $estoy . '/' . $archivo;


if (Storage::exists($ruta)) {

    session()->put('estoy', $ruta);

    $files = Storage::files($ruta);
    $directorio = Storage::directories($ruta);

    return view('driveMostrar', compact('files', 'ruta', 'directorio'));
} else {
    $files = Storage::files($estoy);
    $directorio = Storage::directories($estoy);
    $ruta = $estoy;
    return view('driveMostrar', compact('files', 'ruta', 'directorio'));
}

        /*$estoy = session()->get("estoy");
        $ruta=$estoy."/".$archivo;
        session()->put('estoy' , $ruta);
        //Leer Ficheros y mostrar 
        $files = Storage::files($ruta);
        $directorio = Storage::directories($ruta);
        return view('driveMostrar', compact('files', 'ruta','directorio'));*/
    }



}
