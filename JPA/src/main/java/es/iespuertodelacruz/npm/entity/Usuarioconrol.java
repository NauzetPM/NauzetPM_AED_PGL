package es.iespuertodelacruz.npm.entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the usuarioconrol database table.
 * 
 */
@Entity
@Table(name="usuarioconrol")
@NamedQuery(name="Usuarioconrol.findAll", query="SELECT u FROM Usuarioconrol u")
public class Usuarioconrol implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idusuario;

	@Column(nullable=false, length=45)
	private String nombre;

	@Column(nullable=false, length=200)
	private String password;

	@Column(nullable=false, length=45)
	private String rol;

	public Usuarioconrol() {
	}

	public int getIdusuario() {
		return this.idusuario;
	}

	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRol() {
		return this.rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

}