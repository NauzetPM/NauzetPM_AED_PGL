package es.iespuertodelacruz.nauzet.PracticasSpring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.iespuertodelacruz.nauzet.PracticasSpring.entity.Persona;
import es.iespuertodelacruz.nauzet.PracticasSpring.repository.IPersonaRepository;
import jakarta.transaction.Transactional;

@Service
public class PersonasService implements IGenericService<Persona, Integer> {
	@Autowired
	private IPersonaRepository personaRepository;

	@Override
	@Transactional
	public Iterable<Persona> findAll() {
		return personaRepository.findAll();
	}

	@Override
	@Transactional
	public Optional<Persona> findById(Integer id) {
		return personaRepository.findById(id);
	}

	@Override
	@Transactional
	public Persona save(Persona element) {
		return personaRepository.save(element);
	}
	
	/*@Transactional
	public List<Persona> findByName(String name) {
		return personaRepository.findByName(name);
	}*/

	@Override
	@Transactional
	public void deleteById(Integer id) {
		personaRepository.deleteById(id);
	}


}