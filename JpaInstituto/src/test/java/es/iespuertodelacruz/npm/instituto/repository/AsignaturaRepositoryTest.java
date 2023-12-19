package es.iespuertodelacruz.npm.instituto.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.transaction.Transactional;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import es.iespuertodelacruz.npm.instituto.entities.Alumno;
import es.iespuertodelacruz.npm.instituto.entities.Asignatura;


public class AsignaturaRepositoryTest {
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		//EMFSingleton emfSingleton = EMFSingleton.getSingleton();
		//EntityManagerFactory emf = emfSingleton.getEmf();
		emf = Persistence.createEntityManagerFactory("TEST");
		
		asignaturaRepository = new AsignaturaRepository(emf);
	}

	static EntityManagerFactory emf;
	static AsignaturaRepository asignaturaRepository;

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}


	@Test()
	@Order(1)
	void testFindById() {
		

		Asignatura findById = asignaturaRepository.findById("1");
		assertNotNull(findById);
		assertTrue(findById.getId()==1);
		assertTrue(findById.getCurso().equals("1º DAM"));
		assertTrue(findById.getNombre().equals("BAE"));
		//assertTrue(findById.getMatriculas());		
	}


	@Test
	@Order(3)
	void testSave() {

		Asignatura alumno = new Asignatura();
		alumno.setNombre("nombre");
		alumno.setCurso("curso");
		Asignatura save = asignaturaRepository.save(alumno);
		assertNotNull(save);		
		
		
		Asignatura findById = asignaturaRepository.findById(""+save.getId());
		assertNotNull(findById);
		assertTrue(findById.getCurso().equals("curso"));
		assertTrue(findById.getNombre().equals("nombre"));
	}


	@Test
	@Order(5)
	void testRemove() {
		boolean okBorrado = asignaturaRepository.deleteById("1");
		assertTrue(okBorrado);
		Asignatura findById1 = asignaturaRepository.findById("1");
		assertNull(findById1);

	}

	@Test
	@Order(4)
	void testUpdate() {
		Asignatura asignatura = new Asignatura();
		asignatura.setNombre("nombre1");
		asignatura.setCurso("curso2");
		asignatura.setId(2);
		boolean okUpdate = asignaturaRepository.update(asignatura);
		assertTrue(okUpdate);
		
		Asignatura findById = asignaturaRepository.findById("2");
		assertTrue(asignatura.getId()==findById.getId());
		assertTrue(asignatura.getNombre().equals(findById.getNombre()));
		assertTrue(asignatura.getCurso().equals(findById.getCurso()));
	}

	@Test
	@Order(2)
	void testFindAll() {
		List<Asignatura> todasLasAsignaturas = asignaturaRepository.findAll();
        assertNotNull(todasLasAsignaturas);


        assertEquals(8, todasLasAsignaturas.size());
        Asignatura asignatura = todasLasAsignaturas.stream().filter(c->c.getId()==1).findFirst().get();
		assertTrue(asignatura.getNombre().equals("BAE"));
		assertTrue(asignatura.getCurso().equals("1º DAM"));

		
		asignatura = todasLasAsignaturas.stream().filter(c->c.getId()==2).findFirst().get();
		assertTrue(asignatura.getNombre().equals("PGV"));
		assertTrue(asignatura.getCurso().equals("2º DAM"));
		
		asignatura = todasLasAsignaturas.stream().filter(c->c.getId()==3).findFirst().get();
		assertTrue(asignatura.getNombre().equals("LND"));
		assertTrue(asignatura.getCurso().equals("1º DAM"));

	}
	
}
