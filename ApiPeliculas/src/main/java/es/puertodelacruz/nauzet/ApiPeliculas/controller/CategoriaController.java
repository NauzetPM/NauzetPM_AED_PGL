package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.CategoriaDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
import es.puertodelacruz.nauzet.ApiPeliculas.mappers.CategoriaDTOInputMapper;
import es.puertodelacruz.nauzet.ApiPeliculas.service.CategoriaService;


@RestController
@CrossOrigin
@RequestMapping("/Api/Categoria")
public class CategoriaController {

	@Autowired CategoriaService categoriaService;
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(Categoria categoria){
		return ResponseEntity.ok(categoriaService.update(categoria));
	}
	@PostMapping("/")
	public ResponseEntity<?> save(CategoriaDTOInput categoriadto){
		Categoria categoria=CategoriaDTOInputMapper.toDomain(categoriadto);
		return ResponseEntity.ok(categoriaService.save(categoria));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> findAll(){
		return ResponseEntity.ok(categoriaService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id){
		return ResponseEntity.ok(categoriaService.findById(id));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		categoriaService.deleteById(id);
		return null;
	}
}
