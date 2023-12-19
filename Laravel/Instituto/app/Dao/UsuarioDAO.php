<?php

namespace App\dao;

use App\Dao\Crud;
use App\Models\Usuario;
use App\Contracts\UsuarioContract;
use PDO;
use Exception;

class UsuarioDAO implements Crud
{
    private $myPDO;
    public function __construct($pdo)
    {
        $this->myPDO = $pdo;
    }
    public function findAll()
    {
        $stmt = $this->myPDO->prepare("SELECT * FROM " . UsuarioContract::TABLE_NAME);
        $stmt->setFetchMode(PDO::FETCH_ASSOC); //devuelve array asociativo
        $stmt->execute(); // Ejecutamos la sentencia
        $usuarios = [];
        while ($row = $stmt->fetch()) {
            $p = new Usuario($row["nick"],$row["password"]);
            $usuarios[] = $p;
        }

        return $usuarios;
    }
    public function create($p)
    {
        $tablename = UsuarioContract::TABLE_NAME;
        $colnombre = UsuarioContract::COL_NICK;
        $colpassword = UsuarioContract::COL_PASSWORD;
        $sql = "INSERT INTO $tablename ($colnombre, $colpassword)
        VALUES(:nick, :password)";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':nick' => $p->nombre,
                    ":password" => $p->contrasenia,
                ]
            );
            $idgenerado = $this->myPDO->lastInsertId();
            $p->id=$idgenerado;
            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
            return $p;
        } catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }
        $stmt = null;
    }



    public function update($p)
    {
        $tablename = UsuarioContract::TABLE_NAME;
        $coldni = UsuarioContract::COL_ID;
        $colnombre = UsuarioContract::COL_NICK;
        $colpassword = UsuarioContract::COL_PASSWORD;
        $sql ="UPDATE $tablename SET $colnombre=$p->nombre,$colpassword=$p->contrasenia
        WHERE $coldni=$p->id";
        try {
            $this->myPDO->beginTransaction();
            $stmt = $this->myPDO->prepare($sql);
            $stmt->execute(
                [
                    ':nick' => $p->nombre,
                    ":password" => $p->contrasenia,
                ]
            );
            $filasAfectadas = $stmt->rowCount();
            $this->myPDO->commit();
        }catch (Exception $ex) {
            echo "<br>ha habido una excepción se lanza rollback automático<br>";
        }


    }
    public function delete($id)
    {
        $tablename = UsuarioContract::TABLE_NAME;
        $colid = UsuarioContract::COL_ID;

        try {
            $this->myPDO->beginTransaction();
            $matriculaDeleteSQL = "DELETE * FROM $tablename WHERE $colid = :id";
            $matriculaStmt = $this->myPDO->prepare($matriculaDeleteSQL);
            $matriculaStmt->execute([':id' => $id]);
            $this->myPDO->commit();
        } catch (Exception $ex) {
            $this->myPDO->rollBack();
            echo "<br> Ha habido una excepción y se ha realizado un rollback automático.";
        }
    }


    public function getById($id)
    {
        $tablename = UsuarioContract::TABLE_NAME;
        $colid = UsuarioContract::COL_ID;
        $colnombre = UsuarioContract::COL_NICK;
        $colpassword = UsuarioContract::COL_PASSWORD;
        $stmt = $this->myPDO->prepare("SELECT * FROM $tablename WHERE $colid = :id" );
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        if ($row) {
            $usuario=new Usuario($row[$colnombre], $row[$colpassword]);
            $usuario->id=$row[$colid];
            return $usuario;
        }
        return null;
    }

}
