<?php

namespace App\Http\Controllers;

use App\dao\AsignaturaDAO;
use App\dao\MatriculaDAO;
use App\Models\Matricula;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
class ManejarMatriculasController extends Controller
{
    public function agregar(Request $request){
        $pdo = DB::getPdo();
        $dao = new  MatriculaDAO($pdo);
        $dni = $request->input('dni');
        $year = $request->input('anio');
        $idAsignatura = $request->input('idAsignatura');
        $asignaturasIDs = explode(',', $idAsignatura);
        $daoAsignatura = new AsignaturaDAO($pdo);
        $arrayAsignarutas=[];
        foreach ($asignaturasIDs as $key => $value) {
        $asignatura=$daoAsignatura->getById($value);
        $arrayAsignarutas[]=$asignatura;
        }
        $a = new Matricula($dni,$year,$arrayAsignarutas);
        $matricula = $dao->create($a);
        return view('gestorMatriculas');
    }
    public function mostrartodos(Request $request){
        $pdo = DB::getPdo();
        $dao = new MatriculaDAO($pdo);
        $matricula=$dao->findAll();
        $arrayMensaje=[];
        for ($i=0; $i <count($matricula); $i++) {
            $arrayMensaje[$i]="ID: ".$matricula[$i]->id ."DNI: ".$matricula[$i]->dni." Año: ".$matricula[$i]->year;
        }
        return view('gestorMatriculas', compact('arrayMensaje'));
    }
    public function mostrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new MatriculaDAO($pdo);
        $id = $request->input('id');
        $matricula=$dao->getById($id);
        $arrayMensaje=[];
        $arrayMensaje[0]="DNI: ".$matricula->dni." Año: ".$matricula->year;
        return view('gestorMatriculas', compact('arrayMensaje'));
    }
    public function borrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new MatriculaDAO($pdo);
        $id = $request->input('dni');
        $dao->delete($id);
        return view('gestorMatriculas');
    }
    public function editar(Request $request){
        $pdo = DB::getPdo();
        $dao = new MatriculaDAO($pdo);
        $dni = $request->input('dni');
        $year = $request->input('anio');
        $id = $request->input('id');
        $matricula=new Matricula($dni,$year);
        $matricula->id=$id;
        $dao->update($matricula);
        return view('gestorMatriculas');
    }
}
