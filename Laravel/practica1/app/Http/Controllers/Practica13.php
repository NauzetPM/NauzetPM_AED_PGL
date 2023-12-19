<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Practica13 extends Controller
{
    public function index(Request $request)
    {
        $color = $request->input('color');
        $colores= session()->get('colores') ?? [] ;
        $colores[]=$color;
        $aleatorio=rand(0,count($colores));
        $colorFavorito=$colores[$aleatorio];
        session()->put('colores',$colores);
        return view('practica13_2view', compact('colores','colorFavorito'));
    }
}
