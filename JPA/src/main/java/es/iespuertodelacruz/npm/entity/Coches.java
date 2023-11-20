package es.iespuertodelacruz.npm.entity;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the coches database table.
 * 
 */
@Entity
@Table(name="coches")
@NamedQuery(name="Coches.findAll", query="SELECT c FROM Coches c")
public class Coches implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(unique=true, nullable=false, length=20)
	private String matricula;

	@Column(length=100)
	private String marca;

	@Column(length=100)
	private String modelo;

	//bi-directional many-to-many association to Conductores
	@ManyToMany
	@JoinTable(name = "coche_conductor", joinColumns = @JoinColumn(name = "matricula"), inverseJoinColumns = @JoinColumn(name = "idconductor"))
	private List<Conductores> conductores;

	public Coches() {
	}

	public String getMatricula() {
		return this.matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getMarca() {
		return this.marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return this.modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public List<Conductores> getConductores() {
		return this.conductores;
	}

	public void setConductores(List<Conductores> conductores) {
		this.conductores = conductores;
	}

}