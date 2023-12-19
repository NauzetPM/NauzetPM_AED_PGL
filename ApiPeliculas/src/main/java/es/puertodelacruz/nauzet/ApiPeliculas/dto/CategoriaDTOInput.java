package es.puertodelacruz.nauzet.ApiPeliculas.dto;

import java.util.List;


import es.puertodelacruz.nauzet.ApiPeliculas.entity.Pelicula;


public class CategoriaDTOInput {
	private String nombre;
	
	public CategoriaDTOInput(String nombre) {
		this.nombre = nombre;
	}
	public CategoriaDTOInput() {
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
