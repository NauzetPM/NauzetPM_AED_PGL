package es.iespuertodelacruz.nauzet.PracticasSpring.repository;

import org.springframework.stereotype.Repository;

import es.iespuertodelacruz.nauzet.PracticasSpring.entity.Persona;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Integer> {
	
}