<?php

namespace App\dao;

use App\Dao\Crud;
use App\Models\Alumno;
use App\Contracts\AlumnoContract;
use PDO;
use Exception;

class AlumnoDAO implements Crud
{
    private $myPDO;
    public function __construct($pdo)
    {
        $this->myPDO = $pdo;
    }
    public function findAll()
    {
        $stmt = $this->myPDO->prepare("SELECT * FROM " . AlumnoContract::TABLE_NAME);
        $stmt->setFetchMode(PDO::FETCH_ASSOC); //devuelve array asociativo
        $stmt->execute(); // Ejecutamos la sentencia
        $alumnos = [];
        while ($row = $stmt->fetch()) {
            $p = new Alumno();
            $p->dni = ($row["dni"]);
            $p->nombre = ($row["nombre"]);
            $p->apellidos = ($row["apellidos"]);
            $p->fechanacimiento = ($row["fechanacimiento"]);
            $alumnos[] = $p;
        }

        return $alumnos;
    }
    public function create($p)
    {
        $tablename = AlumnoContract::TABLE_NAME;
        $coldni = AlumnoContract::COL_DNI;
        $colnombre = AlumnoContract::COL_NOMBRE;
        $colapellidos = AlumnoContract::COL_APELLIDOS;
        $colfecha = AlumnoContract::COL_FECHANACIMIENTO;
        $sql = "INSERT INTO $tablename ($coldni, $colnombre, $colapellidos,$colfecha)
        VALUES(:dni,:nombre, :apellidos,:fechanacimiento)";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':dni' => $p->dni,
                    ':nombre' => $p->nombre,
                    ":apellidos" => $p->apellidos,
                    ":fechanacimiento" => $p->fechanacimiento
                ]
            );
            $filasAfectadas = $stmt->rowCount();
            echo"<br>afectadas: " . $filasAfectadas;
        } catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }
        $stmt = null;
    }



    public function update($p)
    {
        $tablename = AlumnoContract::TABLE_NAME;
        $coldni = AlumnoContract::COL_DNI;
        $colnombre = AlumnoContract::COL_NOMBRE;
        $colapellidos = AlumnoContract::COL_APELLIDOS;
        $colfecha = AlumnoContract::COL_FECHANACIMIENTO;
        $sql ="UPDATE $tablename SET $colnombre=$p->nombre,$colapellidos=$p->apellidos,$colfecha=$p->fechanacimiento
        WHERE $coldni=$p->dni";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':dni' => $p->dni,
                    ':nombre' => $p->nombre,
                    ":apellidos" => $p->apellidos,
                    ":fechanacimiento" => $p->fechanacimiento
                ]
            );
            $filasAfectadas = $stmt->rowCount();
            echo"<br>afectadas: " . $filasAfectadas;
        }catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }


    }
    public function delete($id)
    {


    }
    public function getById($id)
    {
    }
}
