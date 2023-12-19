package es.puertodelacruz.nauzet.ApiPeliculas.mappers;

import es.puertodelacruz.nauzet.ApiPeliculas.dto.CategoriaDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;

public class CategoriaDTOInputMapper {

    public static CategoriaDTOInput toDTO(Categoria categoria) {
        CategoriaDTOInput categoriaDTOInput = new CategoriaDTOInput();
        categoriaDTOInput.setNombre(categoria.getNombre());
        return categoriaDTOInput;
    }

    public static Categoria toDomain(CategoriaDTOInput categoriaDTOInput) {
        Categoria categoria = new Categoria();
        categoria.setNombre(categoriaDTOInput.getNombre());
        return categoria;
    }
}
