<?php

namespace App\Models;

class Matricula
{
    public $id;
    public $dni;
    public $year;
    public $asignaturas;

    public function __construct( $dni, $year, $asignaturas = null)
    {
        $this->dni = $dni;
        $this->year = $year;
        $this->asignaturas = $asignaturas;
    }
}
