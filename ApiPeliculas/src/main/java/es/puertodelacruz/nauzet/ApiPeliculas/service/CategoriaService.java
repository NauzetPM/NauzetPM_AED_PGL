package es.puertodelacruz.nauzet.ApiPeliculas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
import es.puertodelacruz.nauzet.ApiPeliculas.repository.ICategoriaRepository;
import jakarta.transaction.Transactional;



@Service
public class CategoriaService implements IGenericService<Categoria, Integer> {
	@Autowired
	private ICategoriaRepository categoriaRepository;

	@Override
	@Transactional
	public Iterable<Categoria> findAll() {
		return categoriaRepository.findAll();
	}

	@Override
	@Transactional
	public Optional<Categoria> findById(Integer id) {
		return categoriaRepository.findById(id);
	}
	 @Transactional
	    public boolean update(Categoria categoria) {
	        Optional<Categoria> opt = categoriaRepository.findById(categoria.getId());

	        if (opt.isPresent()) {
	            Categoria existingCategoria = opt.get();
	            
	            // Actualizar propiedades de la categoría
	            existingCategoria.setNombre(categoria.getNombre()); // Asegúrate de incluir todas las propiedades que desees actualizar
	            
	            categoriaRepository.save(existingCategoria);
	            return true;
	        } else {
	            return false; // No existe la categoría con el ID proporcionado
	        }
	    }
	@Override
	@Transactional
	public Categoria save(Categoria element) {
		return categoriaRepository.save(element);
	}
	


	@Override
	@Transactional
	public void deleteById(Integer id) {
		categoriaRepository.deleteById(id);
	}


}