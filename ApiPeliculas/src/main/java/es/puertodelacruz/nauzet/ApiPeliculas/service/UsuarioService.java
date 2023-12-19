package es.puertodelacruz.nauzet.ApiPeliculas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Usuario;
import es.puertodelacruz.nauzet.ApiPeliculas.repository.IUsuarioRepository;

@Service
public class UsuarioService implements IGenericService<Usuario, Integer> {
	@Autowired
	IUsuarioRepository usuariorepository;

	@Override
	public Iterable<Usuario> findAll() {
		return usuariorepository.findAll();
	}

	@Override
	public Optional<Usuario> findById(Integer id) {
		return usuariorepository.findById(id);
	}

	@Override
	public Usuario save(Usuario element) {
		return usuariorepository.save(element);
	}

	@Override
	public void deleteById(Integer id) {
		usuariorepository.deleteById(id);
	}

	public Usuario findByName(String nombre) {
		return usuariorepository.findByName(nombre);
	}
}