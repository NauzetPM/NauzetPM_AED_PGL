<?php

namespace Tests\Feature;

use App\Dao\UsuarioDAO;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class UsuarioDAOTest extends TestCase{

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

        $alumnodao = new UsuarioDAO($pdo);
        $alumnos = $alumnodao->findAll();
        assertTrue(count($alumnos) == 4);
    }

    public function test_2_save(): void {
        $pdo = DB::getPdo();

        $alumnodao = new UsuarioDAO($pdo);
        $a = new Usuario("nick","password");
        $alumno = $alumnodao->create($a);
        $alumnos = $alumnodao->findAll();
        assertTrue(count($alumnos) == 5);
        assertTrue(isset($alumno->id ));
    }


    public function test_3_findbyid(): void {
        $pdo = DB::getPdo();

        $asignaturaDAO = new UsuarioDAO($pdo);

        $obtenido = $asignaturaDAO->getById(1);
        assertTrue(isset($obtenido) && (1 == $obtenido->id ) );
    }
}
