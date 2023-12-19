<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ManejarAlumnoController;
use App\Http\Controllers\ManejarAsignaturasController;
use App\Http\Controllers\ManejarMatriculasController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('/', function () {
    return view('registerDriveview');
});
Route::any('/login', function () {
    return view('loginDriveview');
});
Route::any('/gestorAlumnos', function () {
    return view('gestorAlumnos');
});
Route::any('/opciones', function () {
    return view('formOpciones');
});
Route::any('/gestorAsignaturas', function () {
    return view('gestorAsignaturas');
});
Route::any('/gestorMatriculas', function () {
    return view('gestorMatriculas');
});
Route::any('/procesarRegisterDrive', [MenuController::class, 'register']);
Route::any('/procesarLoginDrive', [MenuController::class, 'logearse']);
Route::any('/logout', [MenuController::class, 'logout']);
//Alumnos
Route::any('/agregarAlumno', [ManejarAlumnoController::class, 'agregar']);
Route::any('/borrarAlumno', [ManejarAlumnoController::class, 'borrar']);
Route::any('/editarAlumno', [ManejarAlumnoController::class, 'editar']);
Route::any('/mostrarAlumno', [ManejarAlumnoController::class, 'mostrar']);
Route::any('/mostrarAlumnotodos', [ManejarAlumnoController::class, 'mostrartodos']);
Route::any('/mostrarAlumnoAsignatura', [ManejarAlumnoController::class, 'mostrarPorAsignatura']);
Route::any('/mostrarAlumnoNombre', [ManejarAlumnoController::class, 'mostrarPorNombre']);
//Asignaturas
Route::any('/agregarAsignatura', [ManejarAsignaturasController::class, 'agregar']);
Route::any('/borrarAsignatura', [ManejarAsignaturasController::class, 'borrar']);
Route::any('/editarAsignatura', [ManejarAsignaturasController::class, 'editar']);
Route::any('/mostrarAsignatura', [ManejarAsignaturasController::class, 'mostrar']);
Route::any('/mostrarAsignaturatodos', [ManejarAsignaturasController::class, 'mostrartodos']);
//Matriculas
Route::any('/agregarMatriculas', [ManejarMatriculasController::class, 'agregar']);
Route::any('/borrarMatriculas', [ManejarMatriculasController::class, 'borrar']);
Route::any('/editarMatriculas', [ManejarMatriculasController::class, 'editar']);
Route::any('/mostrarMatriculas', [ManejarMatriculasController::class, 'mostrar']);
Route::any('/mostrarMatriculastodos', [ManejarMatriculasController::class, 'mostrartodos']);
