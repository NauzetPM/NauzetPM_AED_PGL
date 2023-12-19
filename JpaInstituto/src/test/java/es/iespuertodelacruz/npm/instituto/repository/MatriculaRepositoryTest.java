package es.iespuertodelacruz.npm.instituto.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import es.iespuertodelacruz.npm.instituto.entities.Asignatura;
import es.iespuertodelacruz.npm.instituto.entities.Matricula;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MatriculaRepositoryTest {

    private static EntityManagerFactory emf;
    private static MatriculaRepository matriculaRepository;

    @BeforeAll
    static void setUpBeforeClass() throws Exception {
        emf = Persistence.createEntityManagerFactory("TEST");
        matriculaRepository = new MatriculaRepository(emf);
    }

    @AfterAll
    static void tearDownAfterClass() throws Exception {
        emf.close();
    }

    @Test
    @Order(1)
    void testFindById() {
        Matricula findById = matriculaRepository.findById("1");
        assertNotNull(findById);
        assertEquals(2023, findById.getYear());

    }
    
    @Test
    @Order(3)
    void testSave() {
        Matricula matricula = new Matricula();
        matricula.setYear(2029);

        Matricula save = matriculaRepository.save(matricula);
        assertNotNull(save);

        Matricula findById = matriculaRepository.findByIdRel(String.valueOf(save.getId()));
        assertNotNull(findById);
        assertEquals(2029, findById.getYear());
        assertEquals(0, findById.getAsignaturas().size());  // Se espera que no haya asignaturas asociadas en este punto
    }

    @Test
    @Order(4)
    void testUpdate() {
        Matricula matricula = new Matricula();
        matricula.setYear(2030);
        matricula.setId(2);

            boolean okUpdate = matriculaRepository.update(matricula);
            assertTrue(okUpdate);

            
            Matricula findById = matriculaRepository.findByIdRel("2");
            assertNotNull(findById);
            assertEquals(2030, findById.getYear());
            assertEquals(0, findById.getAsignaturas().size());
    }


    @Test
    @Order(2)
    void testFindAll() {
        List<Matricula> todasLasMatriculas = matriculaRepository.findAll();
        assertNotNull(todasLasMatriculas);

        assertEquals(1, todasLasMatriculas.size()); 

        Matricula primeraMatricula = todasLasMatriculas.get(0);
        assertEquals(2023, primeraMatricula.getYear());
    }


    @Test
    @Order(5)
    void testRemove() {
        boolean okBorrado = matriculaRepository.deleteById("1");
        assertTrue(okBorrado);
        Matricula findById1 = matriculaRepository.findById("1");
        assertNull(findById1);
    }
    @Test
    @Order(6)
    void testFindAllRel() {
        List<Matricula> todasLasMatriculas = matriculaRepository.findAllRel();
        assertNotNull(todasLasMatriculas);

        assertEquals(2, todasLasMatriculas.size()); 

        Matricula primeraMatricula = todasLasMatriculas.get(0);
        assertEquals(2029, primeraMatricula.getYear());
        assertEquals(0, primeraMatricula.getAsignaturas().size());


    }

    @Test
    @Order(7)
    void testFindByIdRel() {
        Matricula findByIdRel = matriculaRepository.findByIdRel("1");
        assertNotNull(findByIdRel);
        assertEquals(2023, findByIdRel.getYear());
        assertEquals(1, findByIdRel.getAsignaturas().size());
    }

}
