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


//Drive
Route::any('/', function () {
    return view('registerDriveview');
});
Route::any('/driveLogin', function () {
    return view('loginDriveview');
});
Route::any('/fileupload', [Drive::class, 'subirArchivo']);
Route::any('/logout', [Drive::class, 'logout']);
Route::any('/listaFicherosdrive', [Drive::class, 'listaFicheros']);
Route::any('/procesarRegisterDrive', [Drive::class, 'register']);
Route::any('/procesarLoginDrive', [Drive::class, 'logearse']);
Route::any('/descargarDrive/{archivo}', [Drive::class, 'descargar']);
Route::any('/eliminarDrive/{archivo}', [Drive::class, 'eliminar']);
Route::any('/cargarArchivos/{archivo}', [Drive::class, 'cargarArchivos']);
Route::any('/crearCarpeta', [Drive::class, 'crearCarpeta']);
Route::any('/volver', [Drive::class, 'volver']);
Route::any('/eliminarCarpeta/{archivo}', [Drive::class, 'eliminarCarpeta']);