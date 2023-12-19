package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.PeliculaDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.dto.PeliculaDTOInputSave;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;
import es.puertodelacruz.nauzet.ApiPeliculas.mappers.PeliculaDTOInputMapper;
import es.puertodelacruz.nauzet.ApiPeliculas.mappers.PeliculaDTOInputSaveMapper;
import es.puertodelacruz.nauzet.ApiPeliculas.service.PeliculaService;

@RestController
@CrossOrigin
@RequestMapping("/Api/Peliculas")
public class PeliculaController {
	
	@Autowired PeliculaService peliculaService;
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@RequestBody PeliculaDTOInput peliculadto){
		Pelicula pelicula=PeliculaDTOInputMapper.toDomain(peliculadto);
		return ResponseEntity.ok(peliculaService.update(pelicula));
	}
	@PostMapping("/")
	public ResponseEntity<?> save(@RequestBody PeliculaDTOInputSave peliculadto){
		System.out.println("actor recibidas: " + peliculadto.getActores());
		System.out.println("Categorias recibidas: " + peliculadto.getCategorias());
		Pelicula pelicula=PeliculaDTOInputSaveMapper.toDomain(peliculadto);
		return ResponseEntity.ok(peliculaService.save(pelicula));
	}
	
	
	@GetMapping("/")
	public ResponseEntity<?> findAll(){
		return ResponseEntity.ok(peliculaService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id){
		return ResponseEntity.ok(peliculaService.findById(id));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		peliculaService.deleteById(id);
		return null;
	}

}