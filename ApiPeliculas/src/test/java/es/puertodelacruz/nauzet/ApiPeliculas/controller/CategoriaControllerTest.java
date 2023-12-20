package es.puertodelacruz.nauzet.ApiPeliculas.controller;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import static org.hamcrest.Matchers.hasSize;

import es.puertodelacruz.nauzet.ApiPeliculas.config.ApplicationNoSecurity;
import es.puertodelacruz.nauzet.ApiPeliculas.dto.CategoriaDTOInput;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Categoria;
import es.puertodelacruz.nauzet.ApiPeliculas.mappers.CategoriaDTOInputMapper;
import es.puertodelacruz.nauzet.ApiPeliculas.security.JwtService;
import es.puertodelacruz.nauzet.ApiPeliculas.service.CategoriaService;
import es.puertodelacruz.nauzet.ApiPeliculas.service.FileStorageService;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;
import java.util.Optional;

@ActiveProfiles("test")
@WebMvcTest(CategoriaController.class)
@Import(ApplicationNoSecurity.class)
public class CategoriaControllerTest {
	@MockBean
	JwtService jwtService;
	
	@MockBean
	FileStorageService fileStorageService;	
	
	@Autowired
	ObjectMapper mapper;
	
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoriaService categoriaService;

    @Test
    public void updateTest() throws Exception {

        Categoria categoriaToUpdate = new Categoria();
        categoriaToUpdate.setId(1);
        categoriaToUpdate.setNombre("Acción");


        when(categoriaService.update(any(Categoria.class))).thenReturn(true);


        mockMvc.perform(MockMvcRequestBuilders.put("/Api/Categoria/{id}", 1)
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"id\":1,\"nombre\":\"Acción\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    public void saveTest() throws Exception {

        CategoriaDTOInput categoriaToSave = new CategoriaDTOInput();
        categoriaToSave.setNombre("Comedia");


        when(categoriaService.save(any(Categoria.class))).thenReturn(new Categoria());


        mockMvc.perform(MockMvcRequestBuilders.post("/Api/Categoria/")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"nombre\":\"Comedia\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void findAllTest() throws Exception {

        Categoria categoria1 = new Categoria(); categoria1.setId(1); categoria1.setNombre("Drama");
        Categoria categoria2 = new Categoria(); categoria2.setId(2); categoria2.setNombre("Comedia");


        when(categoriaService.findAll()).thenReturn(List.of(categoria1, categoria2));


        mockMvc.perform(MockMvcRequestBuilders.get("/Api/Categoria/")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[1].nombre").value("Comedia"));
    }

    @Test
    public void findByIdTest() throws Exception {

        Categoria categoria = new Categoria();
        categoria.setId(1);
        categoria.setNombre("Acción");


        when(categoriaService.findById(1)).thenReturn(Optional.of(categoria));


        mockMvc.perform(MockMvcRequestBuilders.get("/Api/Categoria/{id}", 1)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.nombre").value("Acción"));
    }

    @Test
    public void deleteTest() throws Exception {

        doNothing().when(categoriaService).deleteById(1);


        mockMvc.perform(MockMvcRequestBuilders.delete("/Api/Categoria/{id}", 1))
                .andExpect(status().isOk());
    }
}
