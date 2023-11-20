<?php

namespace App\Models;

class Asignatura
{
    public $id;
    public $nombre;
    public $curso;

    public function __construct($nombre, $curso)
    {
        $this->nombre = $nombre;
        $this->curso = $curso;
    }
}
