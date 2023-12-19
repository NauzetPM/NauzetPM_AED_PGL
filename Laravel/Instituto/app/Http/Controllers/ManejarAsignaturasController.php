<?php

namespace App\Http\Controllers;

use App\dao\AsignaturaDAO;
use App\Models\Asignatura;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
class ManejarAsignaturasController extends Controller
{
    public function agregar(Request $request){
        $pdo = DB::getPdo();
        $dao = new  AsignaturaDAO($pdo);
        $nick = $request->input('nombre');
        $curso = $request->input('curso');
        $a = new Asignatura($nick,$curso);
        $aignatura = $dao->create($a);
        return view('gestorAsignaturas');
    }
    public function mostrartodos(Request $request){
        $pdo = DB::getPdo();
        $dao = new AsignaturaDAO($pdo);
        $asignatura=$dao->findAll();
        $arrayMensaje=[];
        for ($i=0; $i <count($asignatura); $i++) {
            $arrayMensaje[$i]="ID: ".$asignatura[$i]->id."Nombre: ".$asignatura[$i]->nombre." Curso: ".$asignatura[$i]->curso;
        }
        return view('gestorAsignaturas', compact('arrayMensaje'));
    }
    public function mostrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AsignaturaDAO($pdo);
        $id = $request->input('id');
        $asignatura=$dao->getById($id);
        $arrayMensaje=[];
        $arrayMensaje[0]="Nombre: ".$asignatura->nombre." Curso: ".$asignatura->curso;
        return view('gestorAsignaturas', compact('arrayMensaje'));
    }
    public function borrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AsignaturaDAO($pdo);
        $id = $request->input('id');
        $dao->delete($id);
        return view('gestorAsignaturas');
    }
    public function editar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AsignaturaDAO($pdo);
        $nick = $request->input('nombre');
        $curso = $request->input('curso');
        $id = $request->input('id');
        $asignatura=new Asignatura($nick,$curso);
        $asignatura->id=$id;
        $dao->update($asignatura);
        return view('gestorAsignaturas');
    }
}
