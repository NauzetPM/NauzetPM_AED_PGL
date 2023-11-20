<?php

namespace Tests\Feature;

use App\Dao\AlumnoDAO;
use App\Models\Alumno;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class AlumnoDAOTest extends TestCase{

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

        $alumnodao = new AlumnoDAO($pdo);
        $alumnos = $alumnodao->findAll();
        assertTrue(count($alumnos) == 3);
    }

    public function test_2_save(): void {
        $pdo = DB::getPdo();

        $alumnodao = new AlumnoDAO($pdo);
        $a = new Alumno();
        $a->dni = ("dnialumno");
        $a->nombre = ("nombrealumno");
        $a->apellidos = ("apellidosalumno");
        $a->fechanacimiento = ("fechanacimientoalumno");
        $alumno = $alumnodao->create($a);
        $alumnos = $alumnodao->findAll();
        assertTrue(count($alumnos) == 4);
        assertTrue(isset($alumno->dni ));
    }


    public function test_3_findbyid(): void {
        $pdo = DB::getPdo();

        $asignaturaDAO = new AlumnoDAO($pdo);

        $obtenido = $asignaturaDAO->getById("12345678Z");
        assertTrue(isset($obtenido) && ("12345678Z" == $obtenido->dni ) );
    }
}
