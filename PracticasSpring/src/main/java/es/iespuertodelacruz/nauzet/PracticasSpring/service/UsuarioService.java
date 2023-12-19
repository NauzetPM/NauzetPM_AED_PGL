package es.iespuertodelacruz.nauzet.PracticasSpring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.iespuertodelacruz.nauzet.PracticasSpring.entity.Usuario;
import es.iespuertodelacruz.nauzet.PracticasSpring.repository.IUsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements IGenericService<Usuario, Integer> {
	@Autowired
	private IUsuarioRepository usuarioRepository;

	@Override
	@Transactional
	public Iterable<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	@Override
	@Transactional
	public Optional<Usuario> findById(Integer id) {
		return usuarioRepository.findById(id);
	}

	@Override
	@Transactional
	public Usuario save(Usuario element) {
		return usuarioRepository.save(element);
	}
	
	/*@Transactional
	public List<Persona> findByName(String name) {
		return personaRepository.findByName(name);
	}*/

	@Override
	@Transactional
	public void deleteById(Integer id) {
		usuarioRepository.deleteById(id);
	}
}
