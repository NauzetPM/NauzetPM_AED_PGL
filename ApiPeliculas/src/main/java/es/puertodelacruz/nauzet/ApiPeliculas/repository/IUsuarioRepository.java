package es.puertodelacruz.nauzet.ApiPeliculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Usuario;


@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Integer>{
	@Query("SELECT u from Usuario u where u.nombre=:nombre")
	public Usuario findByName(@Param("nombre") String nombre);
}

