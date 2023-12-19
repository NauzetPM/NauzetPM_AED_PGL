<?php

namespace App\Http\Controllers;
use App\Dao\PersonaDAO;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Persona;

class PersonaController extends Controller
{
    public function obtenerPersonas(){
        $pdo=DB::getPdo();
       $personaDao= new PersonaDAO($pdo);
       $personas=$personaDao->findAll();
       var_dump($personas);
       die();
    }
    public function crearPersona(){
        $pdo=DB::getPdo();
        $personaDao= new PersonaDAO($pdo);
        $newPersona=new Persona();
        //$newPersona->id = 3;
        $newPersona->nombre = "Prueba";
        $newPersona->edad = 50;
        $personaDao->create($newPersona);
       $personas=$personaDao->findAll();
       var_dump($personas);
       die();
    }
    public function updatePersona(){
        $pdo=DB::getPdo();
        $personaDao= new PersonaDAO($pdo);
        $newPersona=new Persona();
        $newPersona->id = 1;
        $newPersona->nombre = "update";
        $newPersona->edad = 50;
        $personaDao->update($newPersona);
       $personas=$personaDao->findAll();
       var_dump($personas);
       die();
    }

}

