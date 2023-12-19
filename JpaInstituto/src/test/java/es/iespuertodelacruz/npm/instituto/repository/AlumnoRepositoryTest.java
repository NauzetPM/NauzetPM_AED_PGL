package es.iespuertodelacruz.npm.instituto.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import es.iespuertodelacruz.npm.instituto.entities.Alumno;


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AlumnoRepositoryTest {

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		//EMFSingleton emfSingleton = EMFSingleton.getSingleton();
		//EntityManagerFactory emf = emfSingleton.getEmf();
		emf = Persistence.createEntityManagerFactory("TEST");
		
		alumnoRepository = new AlumnoRepository(emf);
	}

	static EntityManagerFactory emf;
	static AlumnoRepository alumnoRepository;

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}


	@Test()
	@Order(1)
	void testFindById() {
		

		Alumno findById = alumnoRepository.findById("12345678Z");
		assertNotNull(findById);
		assertTrue(findById.getDni().equals("12345678Z"));
		assertTrue(findById.getApellidos().equals("Martín"));
		assertTrue(findById.getNombre().equals("Ana"));
		assertTrue(findById.getFechanacimiento()==968972400000L);		
	}


	@Test
	@Order(3)
	void testSave() {

		Alumno alumno = new Alumno();
		alumno.setDni("dni");
		alumno.setNombre("nombre");
		alumno.setApellidos("apellidos");
		alumno.setFechanacimiento(9821431124L);
		Alumno save = alumnoRepository.save(alumno);
		assertNotNull(save);		
		Alumno findById = alumnoRepository.findById("dni");	
	}


	@Test
	@Order(5)
	void testRemove() {
		boolean okBorrado = alumnoRepository.deleteById("87654321X");
		assertTrue(okBorrado);
		Alumno findById1 = alumnoRepository.findById("87654321X");
		assertNull(findById1);

	}


	@Test
	@Order(4)
	void testUpdate() {
		Alumno alumno = new Alumno();
		alumno.setDni("87654321X");
		alumno.setNombre("nombre");
		alumno.setApellidos("apellidos");
		alumno.setFechanacimiento(9821431124L);

		
		boolean okUpdate = alumnoRepository.update(alumno);
		assertTrue(okUpdate);
		
		Alumno findById = alumnoRepository.findById("87654321X");
		assertTrue(alumno.getDni().equals(findById.getDni()));
		assertTrue(alumno.getNombre().equals(findById.getNombre()));
		assertTrue(alumno.getApellidos().equals(findById.getApellidos()));
		assertTrue(alumno.getFechanacimiento().equals(findById.getFechanacimiento()));
	}

	@Test
	@Order(2)
	void testFindAll() {
		List<Alumno> todos = alumnoRepository.findAll();
		assertTrue(todos.size()==3);
		
		Alumno alumno = todos.stream().filter(c->c.getDni().equals("12345678Z")).findFirst().get();
		assertTrue(alumno.getNombre().equals("Ana"));
		assertTrue(alumno.getApellidos().equals("Martín"));
		assertTrue(alumno.getFechanacimiento().equals(968972400000L));	
		
		alumno = todos.stream().filter(c->c.getDni().equals("87654321X")).findFirst().get();
		assertTrue(alumno.getNombre().equals("Marcos"));
		assertTrue(alumno.getApellidos().equals("Afonso Jiménez"));
		assertTrue(alumno.getFechanacimiento().equals(874278000000L));	
		
		alumno = todos.stream().filter(c->c.getDni().equals("12312312K")).findFirst().get();
		assertTrue(alumno.getNombre().equals("María Luisa"));
		assertTrue(alumno.getApellidos().equals("Gutiérrez"));
		assertTrue(alumno.getFechanacimiento().equals(821234400000L));	

	}
}
