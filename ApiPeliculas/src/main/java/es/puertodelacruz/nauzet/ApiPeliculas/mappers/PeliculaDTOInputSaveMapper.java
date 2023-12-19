package es.puertodelacruz.nauzet.ApiPeliculas.mappers;

import java.util.ArrayList;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.PeliculaDTOInputSave;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;

public class PeliculaDTOInputSaveMapper {
    public static Pelicula toDomain(PeliculaDTOInputSave pelidto) {
        Pelicula pelicula = new Pelicula();
        ArrayList<Categoria> categorias = new ArrayList<>();

        for (Integer categoryId : pelidto.getCategorias()) {
            Categoria cat = new Categoria();
            cat.setId(categoryId);
            cat.setPeliculas(new ArrayList<>()); 
            categorias.add(cat);
        }


        pelicula.setActores(pelidto.getActores());
        pelicula.setArgumento(pelidto.getArgumento()); 
        pelicula.setCategorias(categorias);
        pelicula.setDireccion(pelidto.getDireccion());
        pelicula.setImagen(pelidto.getImagen());
        pelicula.setTitulo(pelidto.getTitulo());
        pelicula.setTrailer(pelidto.getTrailer());

        return pelicula;
    }
}
