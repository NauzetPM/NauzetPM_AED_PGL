<?php

namespace App\dao;

use App\Contracts\AsignaturaContract;
use App\Contracts\AsignaturaMatriculaContract;
use App\Dao\Crud;
use App\Models\Alumno;
use App\Contracts\AlumnoContract;
use App\Contracts\MatriculaContract;
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
            $this->myPDO->commit();
            return $p;
        } catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }
        $stmt = null;
    }
    public function mostrarPorAsignaturaYear($idAsignatura, $year)
    {
        $tableAsignaturaName = AsignaturaContract::TABLE_NAME;
        $tableAlumnoname = AlumnoContract::TABLE_NAME;
        $colnombre = AlumnoContract::COL_NOMBRE;
        $colapellidos = AlumnoContract::COL_APELLIDOS;
        $colfecha = AlumnoContract::COL_FECHANACIMIENTO;
        $coldni = AlumnoContract::COL_DNI;
        $tableMatriculaname = MatriculaContract::TABLE_NAME;
        $AsignaturaID = AsignaturaContract::COL_ID;
        $MatriculaDNI = MatriculaContract::COL_DNI;
        $MatriculaID = MatriculaContract::COL_ID;
        $MatriculaYEAR = MatriculaContract::COL_YEAR;
        $asignaturaMatriculaTable = AsignaturaMatriculaContract::TABLE_NAME;
        $colIdMatricula = AsignaturaMatriculaContract::COL_IDMATRICULA;
        $colIdAsignatura = AsignaturaMatriculaContract::COL_IDASIGNATURA;
        /*SELECT *
        SELECT alumnos.dni, alumnos.nombre, alumnos.apellidos
        FROM alumnos
        INNER JOIN matriculas ON alumnos.dni = matriculas.dni
        INNER JOIN asignatura_matricula ON matriculas.id = asignatura_matricula.idmatricula
        INNER JOIN asignaturas ON asignatura_matricula.idasignatura = asignaturas.id
        WHERE asignaturas.id = 'ID_DE_LA_ASIGNATURA' AND matriculas.year = 'AÑO_CONCRETO';*/
        $stmt = $this->myPDO->prepare("SELECT $tableAlumnoname.$coldni,$tableAlumnoname.$colnombre,$tableAlumnoname.$colapellidos,$tableAlumnoname.$colfecha
        FROM $tableAlumnoname
        INNER JOIN $tableMatriculaname ON $tableAlumnoname.$coldni = $tableMatriculaname.$MatriculaDNI
        INNER JOIN $asignaturaMatriculaTable ON $tableMatriculaname.$MatriculaID = $asignaturaMatriculaTable.$colIdMatricula
        INNER JOIN $tableAsignaturaName ON $asignaturaMatriculaTable.$colIdAsignatura = $tableAsignaturaName.$AsignaturaID
        WHERE $tableAsignaturaName.$AsignaturaID = ? AND $tableMatriculaname.$MatriculaYEAR = ?");
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(1, $idAsignatura, PDO::PARAM_INT);
        $stmt->bindParam(2, $year, PDO::PARAM_INT);
        $stmt->execute();
        $alumnos = [];
        while ($row = $stmt->fetch()) {
            $p = new Alumno();
            $p->dni = $row[$coldni];
            $p->nombre = $row[$colnombre];
            $p->apellidos = $row[$colapellidos];
            $p->fechanacimiento = $row[$colfecha];
            $alumnos[] = $p;
        }

        return $alumnos;
    }
    public function getAlumnosByNombre($nombre)
    {
        $tableAlumnoname = AlumnoContract::TABLE_NAME;
        $colnombre = AlumnoContract::COL_NOMBRE;
        $coldni = AlumnoContract::COL_DNI;

        $stmt = $this->myPDO->prepare("SELECT $tableAlumnoname.$coldni, $tableAlumnoname.$colnombre
    FROM $tableAlumnoname
    WHERE $tableAlumnoname.$colnombre LIKE ?");

        $nombreBusqueda = "%" . $nombre . "%";

        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(1, $nombreBusqueda, PDO::PARAM_STR);
        $stmt->execute();

        $alumnos = [];

        while ($row = $stmt->fetch()) {
            $p = new Alumno();
            $p->dni = $row[$coldni];
            $p->nombre = $row[$colnombre];
            $alumnos[] = $p;
        }

        return $alumnos;
    }




    public function update($p)
    {
        $tablename = AlumnoContract::TABLE_NAME;
        $coldni = AlumnoContract::COL_DNI;
        $colnombre = AlumnoContract::COL_NOMBRE;
        $colapellidos = AlumnoContract::COL_APELLIDOS;
        $colfecha = AlumnoContract::COL_FECHANACIMIENTO;
        $sql = "UPDATE $tablename SET $colnombre=$p->nombre,$colapellidos=$p->apellidos,$colfecha=$p->fechanacimiento
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
        } catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }


    }
    public function delete($id)
    {
        $alumnoTableName = AlumnoContract::TABLE_NAME;
        $matriculaTableName = MatriculaContract::TABLE_NAME;
        $alumnoColDNI = AlumnoContract::COL_DNI;
        $matriculaColAlumnoDNI = MatriculaContract::COL_DNI;

        try {
            $this->myPDO->beginTransaction();

            // Eliminar la matrícula asociada al alumno
            /* $matriculaDeleteSQL = "DELETE  FROM $matriculaTableName WHERE $matriculaColAlumnoDNI = :alumno_dni";
             $matriculaStmt = $this->myPDO->prepare($matriculaDeleteSQL);
             $matriculaStmt->execute([':alumno_dni' => $id]);*/

            // Eliminar al alumno
            $alumnoDeleteSQL = "DELETE FROM $alumnoTableName WHERE $alumnoColDNI = :dni";
            $alumnoStmt = $this->myPDO->prepare($alumnoDeleteSQL);
            $alumnoStmt->execute([':dni' => $id]);

            $alumnoFilasAfectadas = $alumnoStmt->rowCount();
            //$matriculaFilasAfectadas = $matriculaStmt->rowCount();


            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }


    public function getById($id)
    {
        $tablename = AlumnoContract::TABLE_NAME;
        $coldni = AlumnoContract::COL_DNI;
        $sql = "SELECT * FROM $tablename WHERE $coldni = :dni";

        $stmt = $this->myPDO->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute([':dni' => $id]);

        $row = $stmt->fetch();

        if ($row) {
            $alumno = new Alumno();
            $alumno->dni = $row["dni"];
            $alumno->nombre = $row["nombre"];
            $alumno->apellidos = $row["apellidos"];
            $alumno->fechanacimiento = $row["fechanacimiento"];
            return $alumno;
        } else {
            return null; // No se encontró ningún registro con el ID especificado.
        }
    }

}
