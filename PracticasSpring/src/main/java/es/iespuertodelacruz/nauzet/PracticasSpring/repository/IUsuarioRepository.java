package es.iespuertodelacruz.nauzet.PracticasSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.iespuertodelacruz.nauzet.PracticasSpring.entity.Usuario;

public interface IUsuarioRepository extends JpaRepository<Usuario, Integer> {

}
