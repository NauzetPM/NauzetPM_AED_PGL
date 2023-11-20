<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Practica11 extends Controller
{
    public function index(Request $request)
    {
        $texto = $request->input('palabras');
        $palabrasArray=explode(",",$texto);
        return view('practica11_2view', compact('palabrasArray'));
    }



}
