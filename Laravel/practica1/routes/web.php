<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ListarProductos;
use App\Http\Controllers\Micontroller;
use App\Http\Controllers\Practica10Controller;
use App\Http\Controllers\Practica11;
use App\Http\Controllers\Practica13;
use App\Http\Controllers\Practica15;
use App\Http\Controllers\GestorFicheroCsv;
use App\Http\Controllers\GestorUsuarios;
use App\Http\Controllers\Practica17;
use App\Http\Controllers\Practica18;
use App\Http\Controllers\Practica19;
use App\Http\Controllers\Drive;
use App\Http\Controllers\PersonaController;

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

/*Route::get('/', function () {
    return view('welcome');
});*/
//Practica 1
/*Route::get('/',function(){
    echo "Under construction";
});*/
//Practica 2
Route::post('/pruebita', function () {
    echo "se ha ejecutado una peticion post a la direccion:/pruebita";
    die();
});
//Practica 3
Route::any('/relatos/{numero}', function ($numero) {
    return "Petición recibida para el parámetro: $numero";
});
//Practica 4
/*Route::any('/', function () {
    return Micontroller::mostrar();
});*/
// Practica 5
Route::post('/', function () {
    return ListarProductos::mostrarpost();
});
Route::any('/', function () {
    return ListarProductos::mostrarpost();
});
//Practica 7
Route::get('/practica7', [Practica7::class,'index']);
//Practica 8
Route::get('/practica8', [Practica8::class,'index']);
//Practica 9
Route::get('/practica9', [Practica9::class,'index']);
//Practica 10
Route::get('/practica10', [Practica10Controller::class,'generarNumeros']);
//Practica 11
Route::any('/practica11', function () {
    return view('practica11view');
});
Route::get('/Practica11_2', [Practica11::class,'index']);
//Practica 12
Route::any('/practica12', function () {
    return view('practica12view');
});
//Practica 13
Route::any('/practica13', function () {
    return view('practica13view');
});
Route::get('/Practica13_2', [Practica13::class,'index']);
//Practica 15
Route::get('/practica15', [Practica15::class, 'mostrarFormulario']);
Route::post('/practica15p', [Practica15::class, 'procesarFormulario']);

//Practica 16 register login logout y guardar los datos en ficheros
Route::any('/login16', function () {
    return view('loginview');
});
Route::any('/register16', function () {
    return view('register');
});

Route::any('/procesarLogin', [GestorUsuarios::class,'logearse']);
Route::any('/procesarRegister', [GestorUsuarios::class,'register']);
Route::get('/mostrarUsuarios', function () {
    $contenido = GestorFicheroCsv::leerFichero('usuarios.csv');
    return view('mostrarUser', compact('contenido'));
});
//Practica 17

Route::get('/practica17', [Practica17::class, 'mostrarFormulario']);
Route::post('/practica17p', [Practica17::class, 'crearDirectorio']);

//practica 18

Route::get('/practica18', [Practica18::class, 'leerDatos']);

//practica 19
Route::get('/practica19', [Practica19::class, 'listaFicheros']);
Route::any('/descargar/{archivo}', [Practica19::class, 'descargar']);
Route::any('/eliminar/{archivo}', [Practica19::class, 'eliminar']);

//Drive
Route::any('/drive', function () {
    return view('registerDriveview');
});
Route::any('/driveLogin', function () {
    return view('loginDriveview');
});
Route::any('/fileupload', [Drive::class, 'subirArchivo']);
Route::any('/listaFicherosdrive', [Drive::class, 'listaFicheros']);
Route::any('/procesarRegisterDrive', [Drive::class, 'register']);
Route::any('/procesarLoginDrive', [Drive::class, 'logearse']);
Route::any('/descargarDrive/{carpeta}/{archivo}', [Drive::class, 'descargar']);
Route::any('/eliminarDrive/{carpeta}/{archivo}', [Drive::class, 'eliminar']);


//BBDD
Route::any('/personas/mostrar', [PersonaController::class, 'obtenerPersonas']);
Route::any('/personas/crear', [PersonaController::class, 'crearPersona']);
Route::any('/personas/update', [PersonaController::class, 'updatePersona']);



/*----------------------------------------------*/
Route::get('/goodbye', function () {
    return view('goodbye');
});
Route::match(['get','post'],'/getypost',function(){
    echo "responde a get y post";
});
//Route::any("/personas/mostrar",)

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
