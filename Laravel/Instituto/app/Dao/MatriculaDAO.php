<?php
namespace App\dao;

use App\Models\Matricula;
use App\Contracts\MatriculaContract;
use App\Contracts\AsignaturaMatriculaContract;
use PDO;
use Exception;

class MatriculaDAO implements Crud
{
    private $myPDO;

    public function __construct($pdo)
    {
        $this->myPDO = $pdo;
    }

    public function findAll()
    {
        $stmt = $this->myPDO->prepare("SELECT * FROM " . MatriculaContract::TABLE_NAME);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $matriculas = [];
        while ($row = $stmt->fetch()) {
            $matricula = new Matricula($row[MatriculaContract::COL_ID], $row[MatriculaContract::COL_DNI], $row[MatriculaContract::COL_YEAR]);

            // Recuperar asignaturas asociadas a la matrícula desde el arreglo de asignaturas en el objeto Matricula
            $matriculaId = $matricula->id;
            $matriculaAsignaturas = $matricula->asignaturas;

            $matriculas[] = $matricula;
        }

        return $matriculas;
    }
    private function crearAsignaturaMatricula($matriculaId,$asignaturaid){
        $asignaturaMatriculaTable = AsignaturaMatriculaContract::TABLE_NAME;
        $colIdMatricula = AsignaturaMatriculaContract::COL_IDMATRICULA;
        $colIdAsignatura = AsignaturaMatriculaContract::COL_IDASIGNATURA;
        $sqlInsertAsignaturas = "INSERT INTO $asignaturaMatriculaTable ($colIdMatricula, $colIdAsignatura) VALUES (:idmatricula, :idasignatura)";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sqlInsertAsignaturas);
            $stmt->execute([
                ':idmatricula' => $matriculaId,
                ':idasignatura' => $asignaturaid
            ]);
            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático en asignaturas.";
        }
    }
    public function create($matricula)
    {
        $tablename = MatriculaContract::TABLE_NAME;
        $coldni = MatriculaContract::COL_DNI;
        $colyear = MatriculaContract::COL_YEAR;

        $sql = "INSERT INTO $tablename ($coldni, $colyear) VALUES(:dni, :year)";

        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute([
                ':dni' => $matricula->dni,
                ':year' => $matricula->year
            ]);
            $matriculaId = $this->myPDO->lastInsertId();
            $this->myPDO->commit();
            foreach ($matricula->asignaturas as $asignatura) {
                $this->crearAsignaturaMatricula($matriculaId,$asignatura->id);
            }

            $matricula->id = $matriculaId;
            return $matricula;
        } catch (Exception $ex) {
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático." . $ex->getMessage();;
        }
    }
    public function update($matricula)
    {
        $tablename = MatriculaContract::TABLE_NAME;
        $colid = MatriculaContract::COL_ID;
        $coldni = MatriculaContract::COL_DNI;
        $colyear = MatriculaContract::COL_YEAR;
        $sql = "UPDATE $tablename SET $coldni = :dni, $colyear = :year WHERE $colid = :id";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':id' => $matricula->id,
                    ':dni' => $matricula->dni,
                    ':year' => $matricula->year
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
        $tablename = MatriculaContract::TABLE_NAME;
        $colid = MatriculaContract::COL_ID;
        $sql = "DELETE FROM $tablename WHERE $colid = :id";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute([':id' => $id]);

            // También eliminamos las asignaturas asociadas a la matrícula en la tabla asignatura_matricula
            $asignaturaMatriculaTable = AsignaturaMatriculaContract::TABLE_NAME;
            $colIdMatricula = AsignaturaMatriculaContract::COL_IDMATRICULA;
            $sqlDeleteAsignaturas = "DELETE FROM $asignaturaMatriculaTable WHERE $colIdMatricula = :id";
            $stmt = $this->myPDO->prepare($sqlDeleteAsignaturas);
            $stmt->execute([':id' => $id]);

            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }
    private function obtenerAsignaturas(){

    }
        public function getById($id)
        {
            $tablename = MatriculaContract::TABLE_NAME;
            $colid = MatriculaContract::COL_ID;
            $coldni = MatriculaContract::COL_DNI;
            $colyear = MatriculaContract::COL_YEAR;
            $stmt = $this->myPDO->prepare("SELECT * FROM $tablename WHERE $colid = :id" );
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute([':id' => $id]);
            $row = $stmt->fetch();
            if ($row) {

                $asignaturaMatriculaTable = AsignaturaMatriculaContract::TABLE_NAME;
                $colIdAsignatura = AsignaturaMatriculaContract::COL_IDASIGNATURA;
                $colIdMatricula = AsignaturaMatriculaContract::COL_IDMATRICULA;
                $sqlAsignaturas = "SELECT $colIdAsignatura FROM $asignaturaMatriculaTable WHERE $colIdMatricula = :id";
                $stmt = $this->myPDO->prepare($sqlAsignaturas);
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                $stmt->execute([':id' => $id]);
                $asignaturaIds = [];
                while ($rowAsignatura = $stmt->fetch()) {
                    $asignaturaIds[] = $rowAsignatura[$colIdAsignatura];
                }
                $matricula=new Matricula($row[$colid], $row[$coldni], $row[$colyear]);
                $matricula->id=$row[$colid];
                $matricula->asignaturas=$asignaturaIds;
                return  $matricula;
            }
            return  null;

        }
}
