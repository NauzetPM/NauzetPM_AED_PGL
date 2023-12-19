<?php

namespace Tests\Feature;

use App\Dao\AsignaturaDAO;
use App\Models\Asignatura;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class AsignaturaDAOTest extends TestCase{

    public  $databaseCreated = false;

    public  function setUp(): void{
        parent::setUp();

        if(! $this->databaseCreated ){
            $pdo = DB::getPdo();
            require 'CreateDatabase.php';
            $this->databaseCreated = true;
        }
    }


    public function test_1_findAll(): void {
        $pdo = DB::getPdo();

        $asignaturaDAO = new AsignaturaDAO($pdo);
        $asignaturas = $asignaturaDAO->findAll();
        assertTrue(count($asignaturas) == 8);
    }

    public function test_2_save(): void {
        $pdo = DB::getPdo();

        $asignaturaDAO = new AsignaturaDAO($pdo);
        $a = new Asignatura("unaasignatura","uncurso");
        $asignatura = $asignaturaDAO->create($a);
        $asignaturas = $asignaturaDAO->findAll();
        assertTrue(count($asignaturas) == 9);
        assertTrue(isset($asignatura->id ) && $asignatura->id > 0 );
    }


    public function test_3_findbyid(): void {
        $pdo = DB::getPdo();

        $asignaturaDAO = new AsignaturaDAO($pdo);
        $a = new Asignatura("unaasignatura","uncurso");
        /*$asignatura = $asignaturaDAO->create($a);*/
        $obtenido = $asignaturaDAO->getById(5);

        //var_dump($obtenido);
        assertTrue(isset($obtenido) && (5 == $obtenido->id ) );
    }
}
