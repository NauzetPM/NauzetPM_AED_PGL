<?php

namespace Tests\Feature;

use App\Dao\MatriculaDAO;
use App\Models\Matricula;
use App\Models\Asignatura;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class MatriculaDAOTest extends TestCase{

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

        $matriculadao = new MatriculaDAO($pdo);
        $matriculas = $matriculadao->findAll();
        assertTrue(count($matriculas) == 4);
    }

    public function test_2_save(): void {
        $pdo = DB::getPdo();

        $matriculadao = new MatriculaDAO($pdo);
        $asig = new Asignatura("BAE","1º DAM");
        $asig->id=1;
        $asig2 = new Asignatura("LND","1º DAM");
        $asig->id=3;
        $array=[$asig,$asig2];
        $a = new Matricula("12345678Z","year",$array);
        //var_dump($a);
        $matricula = $matriculadao->create($a);
        //var_dump($matricula);
        $matriculas = $matriculadao->findAll();
        assertTrue(count($matriculas) == 5);
        assertTrue(isset($matricula->id ));
    }


    public function test_3_findbyid(): void {
        $pdo = DB::getPdo();

        $matriculadao = new MatriculaDAO($pdo);

        $obtenido = $matriculadao->getById(2);
        assertTrue(isset($obtenido) && (2 == $obtenido->id ) );
    }
}
