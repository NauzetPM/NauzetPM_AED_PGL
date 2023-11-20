<?php

namespace App\Models;

class Usuario
{
    public $id;
    public $nombre;
    public $contrasenia;

    public function __construct( $nombre, $contrasenia)
    {
        $this->nombre = $nombre;
        $this->contrasenia = $contrasenia;
    }
}
