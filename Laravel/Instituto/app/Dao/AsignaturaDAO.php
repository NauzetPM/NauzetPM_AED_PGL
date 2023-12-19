<?php

namespace App\dao;
use App\Dao\Crud;
use App\Models\Asignatura;
use App\Contracts\AsignaturaContract;
use PDO;
use Exception;

class AsignaturaDAO implements Crud
{
    private $myPDO;

    public function __construct($pdo)
    {
        $this->myPDO = $pdo;
    }

    public function findAll()
    {
        $stmt = $this->myPDO->prepare("SELECT * FROM " . AsignaturaContract::TABLE_NAME);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $asignaturas = [];
        while ($row = $stmt->fetch()) {
            $asignatura = new Asignatura($row[AsignaturaContract::COL_ID], $row[AsignaturaContract::COL_NOMBRE], $row[AsignaturaContract::COL_CURSO]);
            $asignaturas[] = $asignatura;
        }

        return $asignaturas;
    }

    public function create($asignatura)
    {
        $tablename = AsignaturaContract::TABLE_NAME;
        $colnombre = AsignaturaContract::COL_NOMBRE;
        $colcurso = AsignaturaContract::COL_CURSO;
        $sql = "INSERT INTO $tablename ($colnombre, $colcurso)
        VALUES(:nombre, :curso)";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':nombre' => $asignatura->nombre,
                    ':curso' => $asignatura->curso
                ]
            );
            $idgenerado = $this->myPDO->lastInsertId();
            $asignatura->id=$idgenerado;
            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
            return $asignatura;
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }

    public function update($asignatura)
    {
        $tablename = AsignaturaContract::TABLE_NAME;
        $colid = AsignaturaContract::COL_ID;
        $colnombre = AsignaturaContract::COL_NOMBRE;
        $colcurso = AsignaturaContract::COL_CURSO;
        $sql = "UPDATE $tablename SET $colnombre = :nombre, $colcurso = :curso WHERE $colid = :id";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':id' => $asignatura->id,
                    ':nombre' => $asignatura->nombre,
                    ':curso' => $asignatura->curso
                ]
            );
            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }

    public function delete($id)
    {
        $tablename = AsignaturaContract::TABLE_NAME;
        $colid = AsignaturaContract::COL_ID;
        $sql = "DELETE FROM $tablename WHERE $colid = :id";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute([':id' => $id]);
            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }

    public function getById($id)
    {
        $tablename = AsignaturaContract::TABLE_NAME;
        $colid = AsignaturaContract::COL_ID;
        $colnombre = AsignaturaContract::COL_NOMBRE;
        $colcurso = AsignaturaContract::COL_CURSO;
        $sql = "SELECT * FROM $tablename WHERE $colid = :id";
        $stmt = $this->myPDO->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        if ($row) {
            $asignatura=new Asignatura($row[$colnombre], $row[$colcurso]);
            $asignatura->id=$row[$colid];
            return $asignatura;
        }
        return null;
    }
}
