package es.puertodelacruz.nauzet.ApiPeliculas.dto;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class PeliculaDTOInputSave {
	private String actores;

	private String argumento;

	private String direccion;

	private String imagen;

	private String titulo;

	private String trailer;
	private List<Integer> categorias;
	public PeliculaDTOInputSave() {
	}
	public PeliculaDTOInputSave(String actores, String argumento, String direccion, String imagen, String titulo,
			String trailer, List<Integer> categorias) {
		this.actores = actores;
		this.argumento = argumento;
		this.direccion = direccion;
		this.imagen = imagen;
		this.titulo = titulo;
		this.trailer = trailer;
		this.categorias = categorias;
		}

	public String getActores() {
		return actores;
	}
	public void setActores(String actores) {
		this.actores = actores;
	}
	public String getArgumento() {
		return argumento;
	}
	public void setArgumento(String argumento) {
		this.argumento = argumento;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTrailer() {
		return trailer;
	}
	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}
	public List<Integer> getCategorias() {
		return categorias;
	}
	public void setCategorias(List<Integer> categorias) {
		this.categorias = categorias;
	}
	
}
