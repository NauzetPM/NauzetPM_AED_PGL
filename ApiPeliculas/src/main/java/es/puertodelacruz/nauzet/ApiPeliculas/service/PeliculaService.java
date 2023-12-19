	package es.puertodelacruz.nauzet.ApiPeliculas.service;
	
	import java.util.ArrayList;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	
	import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
	import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;
import es.puertodelacruz.nauzet.ApiPeliculas.repository.ICategoriaRepository;
import es.puertodelacruz.nauzet.ApiPeliculas.repository.IPeliculaRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
	
	@Service
	public class PeliculaService implements IGenericService<Pelicula, Integer> {
		@Autowired
		private IPeliculaRepository peliculaRepository;
		@Autowired
		private ICategoriaRepository categoriaRepository;
	
		@Override
		@Transactional
		public Iterable<Pelicula> findAll() {
			return peliculaRepository.findAll();
		}
	
		@Override
		@Transactional
		public Optional<Pelicula> findById(Integer id) {
			return peliculaRepository.findById(id);
		}
	
		@Override
		@Transactional
		public Pelicula save(Pelicula element) {
		    if (element.getId() != 0) {
		        Optional<Pelicula> existingPelicula = peliculaRepository.findById(element.getId());
		        if (existingPelicula.isPresent()) {
		            throw new EntityNotFoundException("La película con ID " + element.getId() + " ya existe.");
		        } else {
		            throw new EntityNotFoundException("La película con ID " + element.getId() + " no existe.");
		        }
		    } else {
		    	
		        Pelicula savedPelicula = peliculaRepository.save(element);

		        

		        return savedPelicula;
		    }
		}

		private Pelicula updatePeliculaCategorias(Pelicula pelicula) {
		    ArrayList<Categoria> categoriasCopy = new ArrayList<>(pelicula.getCategorias());

		    for (Categoria categoria : categoriasCopy) {
		        Optional<Categoria> existingCategoria = categoriaRepository.findById(categoria.getId());
		        if (existingCategoria.isPresent()) {
		            Categoria existing = existingCategoria.get();

		            // Verificar si la categoría ya está presente en la lista de la película
		            if (!pelicula.getCategorias().contains(existing)) {
		                existing.getPeliculas().add(pelicula);
		                pelicula.getCategorias().add(existing);
		            }
		        }
		    }
            return pelicula;
		}








		@Transactional
		public boolean update(Pelicula pelicula) {
		    Optional<Pelicula> opt = peliculaRepository.findById(pelicula.getId());

		    if (opt.isPresent()) {
		        Pelicula peli = opt.get();

		        peli.getCategorias().forEach(c -> c.getPeliculas().remove(peli));
		        peli.getCategorias().clear();

		        peli.setActores(pelicula.getActores());
		        peli.setArgumento(pelicula.getArgumento());
		        peli.setDireccion(pelicula.getDireccion());
		        peli.setImagen(pelicula.getImagen());
		        peli.setTitulo(pelicula.getTitulo());
		        peli.setTrailer(pelicula.getTrailer());

		        for (Categoria c : pelicula.getCategorias()) {
		            c.getPeliculas().add(peli);
		            peli.getCategorias().add(c);
		        }
		       

	        peliculaRepository.save(peli);

		        return true;
		    } else {
		        return false;
		    }
		}





	
	
		@Override
		@Transactional
		public void deleteById(Integer id) {
			peliculaRepository.deleteById(id);
		}
	
	}