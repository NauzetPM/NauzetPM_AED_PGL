package es.puertodelacruz.nauzet.ApiPeliculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;


@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria, Integer> {

}
