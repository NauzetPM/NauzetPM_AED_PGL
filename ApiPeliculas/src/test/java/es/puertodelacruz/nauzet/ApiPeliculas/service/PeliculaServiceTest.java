package es.puertodelacruz.nauzet.ApiPeliculas.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;
import jakarta.transaction.Transactional;

@SpringBootTest
@ActiveProfiles("test")
@TestMethodOrder(value = MethodOrderer.OrderAnnotation.class)
@Sql(scripts = {"/peliculas.sql"})
@Transactional
class PeliculaServiceTest {

	@Autowired IokPeliculaRepository okRepository;
	
	@Autowired PeliculaService peliculaService;
	

	
	@Test
	void contextLoads() {
	}
	
	@Test
	void findAllService() {
		List<Pelicula> findAll = (List<Pelicula>) peliculaService.findAll();
		assertNotNull(findAll);
		assertTrue(findAll.size() == 17);
	}
	

	
	@Test
	void findAllWithRelService() {
		List<Pelicula> findAll = (List<Pelicula>) peliculaService.findAll();
		assertNotNull(findAll);
		assertTrue(findAll.size() == 17);
		Optional<Pelicula> opt = findAll.stream()
			.filter(p->p.getId() == 2)
			.findFirst();
		Pelicula pelicula = opt.get();
		assertNotNull(pelicula.getCategorias());
		//mirar el test se supone que da las categorias pero peta
		assertTrue(pelicula.getCategorias().size()==2);
		
		
	}	
	
	@Test
	void findByIdWithRelPeliculaService() {
		
		Optional<Pelicula> optionalPelicula = peliculaService.findById(2);

	    assertTrue(optionalPelicula.isPresent()); 

	    Pelicula pelicula = optionalPelicula.get(); 
	    assertNotNull(pelicula.getCategorias());
	    assertTrue(pelicula.getCategorias().size() == 2);
	}

	
	@Test
	void deleteWithRelPeliculaService() {
		
		//borrando elemento con categorias
		peliculaService.deleteById(1);
		Optional<Pelicula> opt = okRepository.findById(1);
		assertTrue(!opt.isPresent());
		
		//borrando elemento sin categorias
		peliculaService.deleteById(13);
		opt = okRepository.findById(13);
		assertTrue(!opt.isPresent());		
	}
	
	
	@Test
	void savePeliculaService() {
		/*
		Pelicula pelicula = new Pelicula();
		pelicula.setActores("actor, actriz");
		pelicula.setArgumento("argumento");
		pelicula.setDireccion("dirección");
		pelicula.setImagen("imagen");
		pelicula.setTitulo("título");
		pelicula.setTrailer("trailer");
		Pelicula save = peliculaService.save(pelicula);
		assertTrue(save != null);
		assertTrue(save.getId() > 0);
		
		Optional<Pelicula> opt = okRepository.findByIdWithRel(save.getId());
		Pelicula found = opt.get();
		assertNotNull(found);
		assertTrue(found.getActores().equals("actor, actriz"));
		assertTrue(found.getArgumento().equals("argumento"));
		assertTrue(found.getDireccion().equals("dirección"));
		assertTrue(found.getImagen().equals("imagen"));
		assertTrue(found.getTitulo().equals("título"));
		assertTrue(found.getTrailer().equals("trailer"));
		assertTrue(found.getCategorias().size() == 0);
		
		
		
		pelicula = new Pelicula();
		pelicula.setActores("1actor, actriz");
		pelicula.setArgumento("1argumento");
		pelicula.setDireccion("1dirección");
		pelicula.setImagen("1imagen");
		pelicula.setTitulo("1título");
		pelicula.setTrailer("1trailer");
		
		//pelicula.setCategorias(new List<Categoria>());
		//pelicula.setCategorias(new ArrayList<>());
		Categoria categoria = new Categoria();
		categoria.setId(1);
		pelicula.getCategorias().add(categoria);
		
		categoria = new Categoria();
		categoria.setId(2);
		pelicula.getCategorias().add(categoria);
		
		save = peliculaService.save(pelicula);
		assertTrue(save != null);
		assertTrue(save.getId() > 0);
		
		opt = okRepository.findByIdWithRel(save.getId());
		found = opt.get();
		assertNotNull(found);
		assertTrue(found.getActores().equals("1actor, actriz"));
		assertTrue(found.getArgumento().equals("1argumento"));
		assertTrue(found.getDireccion().equals("1dirección"));
		assertTrue(found.getImagen().equals("1imagen"));
		assertTrue(found.getTitulo().equals("1título"));
		assertTrue(found.getTrailer().equals("1trailer"));
		assertTrue(found.getCategorias().size() == 2);
		
		
		for(int id: List.of(1,  2)) {
			boolean anyMatch = found.getCategorias()
					.stream()
					.anyMatch(p->p.getId() == id);

			assertTrue(anyMatch);			
		}

		

		*/
	}	
	
}


interface IokPeliculaRepository extends JpaRepository<Pelicula, Integer>{
	@Query(
	value = "select p from Pelicula p "
			+ "left join fetch p.categorias "
			+ "where p.id = :id"
	)
	Optional<Pelicula> findByIdWithRel(int id);
}
