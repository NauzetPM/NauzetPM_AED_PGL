<?php

namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Dao\UsuarioDAO;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Usuario;
class MenuController extends Controller
{
    public function logearse(Request $request){
        $pdo = DB::getPdo();
        session()->flush();
        session()->regenerate();
        $dao = new UsuarioDAO($pdo);
        $contenido = $dao->findAll();


            foreach ($contenido as $fila) {
                // Compara el nombre y la contraseña con los datos del archivo
                if ($fila->nombre === $request->nick && $fila->contrasenia === $request->password) {
                    //Meter en secion el nick
                    session()->put('nick' , $request->nick);
                    return view('formOpciones');
                }
            }

            $arrayMensaje=[];
            $arrayMensaje[0]="usuario no valido";
            return view('loginDriveview', compact('arrayMensaje'));


    }
    public function logout(){
        session()->flush();
        session()->regenerate();

        return view("loginDriveview");
    }
    public function register(Request $request)
    {
        echo "entra";
        $pdo = DB::getPdo();
        session()->flush();
        session()->regenerate();
        $nick = $request->input('nick');
        $password = $request->input('password');
        $dao = new UsuarioDAO($pdo);
        $usuario=new Usuario($nick,$password);
        $usuario=$dao->create($usuario);
        session()->put('nick' , $nick);
        return view('formOpciones');
    }
}
