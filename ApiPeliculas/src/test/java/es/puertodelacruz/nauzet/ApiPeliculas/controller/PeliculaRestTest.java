package es.puertodelacruz.nauzet.ApiPeliculas.controller;


 import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.Optional;

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

import es.puertodelacruz.nauzet.ApiPeliculas.config.ApplicationNoSecurity;
import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;
import es.puertodelacruz.nauzet.ApiPeliculas.security.JwtService;
import es.puertodelacruz.nauzet.ApiPeliculas.service.FileStorageService;
import es.puertodelacruz.nauzet.ApiPeliculas.service.PeliculaService;

@ActiveProfiles("test")
@WebMvcTest(PeliculaController.class)
@Import(ApplicationNoSecurity.class)
public class PeliculaRestTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper mapper;

	
	@MockBean
	PeliculaService peliculaService;

	@MockBean
	FileStorageService fileStorageService;
	
	@MockBean
	JwtService jwtService;


	@Test
	public void findAllTest() throws Exception {
		
		Pelicula p1 = new Pelicula(); p1.setId(1); p1.setTitulo("uno");
		Pelicula p2 = new Pelicula(); p2.setId(2); p2.setTitulo("dos");
		List<Pelicula> peliculas = List.of( p1,p2 );
	
		when(peliculaService.findAll()).thenReturn(peliculas);
    
        mockMvc.perform(
    			MockMvcRequestBuilders
    				.get("/Api/Peliculas/")

    				.contentType(MediaType.APPLICATION_JSON)
                    
    				
    		)
    		.andExpect(status().isOk())
    		.andExpect(jsonPath("$",hasSize(2)))
    		.andExpect(jsonPath("$[1].titulo", is("dos")));
    		;
    		
    		
	}
	@Test
	public void findById() throws Exception {
		
        Pelicula pelicula = new Pelicula();
        pelicula.setId(1);
        pelicula.setTitulo("Test Pelicula");

        when(peliculaService.findById(1)).thenReturn(Optional.of(pelicula));

        mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/Api/Peliculas/{id}", 1)
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.titulo", is("Test Pelicula")));

        verify(peliculaService, times(1)).findById(1);
    		
    		
	}
	

}

