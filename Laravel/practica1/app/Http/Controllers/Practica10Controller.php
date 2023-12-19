<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\VarDumper\Dumper\ContextProvider\SourceContextProvider;

class Practica10Controller extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function generarNumeros()
    {
        $numeros=[];
        for ($i=0; $i < 20; $i++) {
            array_push($numeros,random_int(0,100));
        }
        return view('practica10view',compact('numeros'));
    }
}
