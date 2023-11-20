<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Practica7 extends Controller
{
    public function index()
    {
        $n = 100; // Número máximo para buscar primos (ajusta según tus necesidades)
        $primos = $this->buscarNumerosPrimos($n); // Función para buscar primos
    
        return view('practica7view', compact('primos'));
    }
    
    private function buscarNumerosPrimos($n)
    {
        $primos = [];
        for ($i = 2; $i <= $n; $i++) {
            $esPrimo = true;
            for ($j = 2; $j < $i; $j++) {
                if ($i % $j === 0) {
                    $esPrimo = false;
                    break;
                }
            }
            if ($esPrimo) {
                $primos[] = $i;
            }
        }
        return $primos;
    }
    
}
