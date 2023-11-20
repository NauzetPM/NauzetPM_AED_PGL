package es.iespuertodelacruz.npm.entity;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the conductores database table.
 * 
 */
@Entity
@Table(name="conductores")
@NamedQuery(name="Conductores.findAll", query="SELECT c FROM Conductores c")
public class Conductores implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int id;

	@Column(length=100)
	private String nombre;

	//bi-directional many-to-many association to Coches
	@ManyToMany(mappedBy="conductores")
	private List<Coches> coches;

	public Conductores() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Coches> getCoches() {
		return this.coches;
	}

	public void setCoches(List<Coches> coches) {
		this.coches = coches;
	}

}