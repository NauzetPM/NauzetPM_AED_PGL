<?php

namespace App\Http\Controllers;

use App\Dao\AlumnoDAO;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Alumno;
class ManejarAlumnoController extends Controller
{
    public function agregar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $nick = $request->input('nombre');
        $apellidos = $request->input('apellidos');
        $nacimiento = $request->input('nacimiento');
        $dni = $request->input('dni');
        $a = new Alumno();
        $a->dni = ($dni);
        $a->nombre = ($nick);
        $a->apellidos = ($apellidos);
        $a->fechanacimiento = ($nacimiento);
        $alumno = $dao->create($a);
        /*echo $nick.$apellidos.$nacimiento.$dni;
        echo $a->nombre;*/
        //echo $alumno->nombre;
        return view('gestorAlumnos');
    }
    public function mostrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $dni = $request->input('dni');
        $alumno=$dao->getById($dni);
        $arrayMensaje=[];
        $arrayMensaje[0]="Nombre: ".$alumno->nombre." Apellidos: ".$alumno->apellidos." Dni: ".$alumno->dni." Fecha nacimiento: ".$alumno->fechanacimiento;
        return view('gestorAlumnos', compact('arrayMensaje'));
    }
    public function mostrarPorAsignatura(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $idAsignatura = $request->input('idAsignatura');
        $year = $request->input('year');
        $alumno=$dao->mostrarPorAsignaturaYear($idAsignatura,$year);
        $arrayMensaje=[];
        for ($i=0; $i <count($alumno); $i++) {
            $arrayMensaje[$i]="Nombre: ".$alumno[$i]->nombre." Apellidos: ".$alumno[$i]->apellidos." Dni: ".$alumno[$i]->dni." Fecha nacimiento: ".$alumno[$i]->fechanacimiento;
        }
        return view('gestorAlumnos', compact('arrayMensaje'));
    }
    public function mostrarPorNombre(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $nombre = $request->input('nombre');
        $alumno=$dao->getAlumnosByNombre($nombre,);
        $arrayMensaje=[];
        for ($i=0; $i <count($alumno); $i++) {
            $arrayMensaje[$i]="Nombre: ".$alumno[$i]->nombre." Apellidos: ".$alumno[$i]->apellidos." Dni: ".$alumno[$i]->dni." Fecha nacimiento: ".$alumno[$i]->fechanacimiento;
        }
        return view('gestorAlumnos', compact('arrayMensaje'));
    }
    public function mostrartodos(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $alumno=$dao->findAll();
        $arrayMensaje=[];
        for ($i=0; $i <count($alumno); $i++) {
            $arrayMensaje[$i]="Nombre: ".$alumno[$i]->nombre." Apellidos: ".$alumno[$i]->apellidos." Dni: ".$alumno[$i]->dni." Fecha nacimiento: ".$alumno[$i]->fechanacimiento;
        }
        return view('gestorAlumnos', compact('arrayMensaje'));
    }

    public function borrar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $dni = $request->input('dni');
        $dao->delete($dni);
        return view('gestorAlumnos');
    }
    public function editar(Request $request){
        $pdo = DB::getPdo();
        $dao = new AlumnoDAO($pdo);
        $nick = $request->input('nombre');
        $apellidos = $request->input('apellidos');
        $nacimiento = $request->input('nacimiento');
        $dni = $request->input('dni');
        $alumno=new Alumno();
        $alumno->nombre=$nick;
        $alumno->apellidos=$apellidos;
        $alumno->fechanacimiento=$nacimiento;
        $alumno->dni=$dni;
        $dao->update($alumno);
        return view('gestorAlumnos');
    }
}
