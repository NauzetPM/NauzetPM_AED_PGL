<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    //use HasFactory;
    /**
     * @var string $nombre
     */
    protected $nombre;
    /**
     * @var string $apellidos
     */
    protected $apellidos;
    /**
     * @var int $edad
     */
    protected $edad;

    /**
     * Get $nombre
     *
     * @return  string
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set $nombre
     *
     * @param  string  $nombre  $nombre
     *
     * @return  self
     */
    public function setNombre(string $nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get $apellidos
     *
     * @return  string
     */
    public function getApellidos()
    {
        return $this->apellidos;
    }

    /**
     * Set $apellidos
     *
     * @param  string  $apellidos  $apellidos
     *
     * @return  self
     */
    public function setApellidos(string $apellidos)
    {
        $this->apellidos = $apellidos;

        return $this;
    }

    /**
     * Get $edad
     *
     * @return  int
     */
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * Set $edad
     *
     * @param  int  $edad  $edad
     *
     * @return  self
     */
    public function setEdad(int $edad)
    {
        $this->edad = $edad;

        return $this;
    }
}
