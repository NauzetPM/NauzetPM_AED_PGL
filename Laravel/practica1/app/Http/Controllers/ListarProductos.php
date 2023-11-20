<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\VarDumper\Dumper\ContextProvider\SourceContextProvider;

class ListarProductos extends Controller
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
    public static function mostrarpost()
    {   
       
        echo"mensaje desde el controller por post";
    }
    public static function mostrarget()
    {   
       
        echo"mensaje desde el controller por get";
    }
}