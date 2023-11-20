package es.iespuertodelacruz.npm.instituto.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


import es.iespuertodelacruz.npm.instituto.entities.Alumno;
import es.iespuertodelacruz.npm.instituto.entities.Matricula;

public class AlumnoRepository implements ICRUD<Alumno,String>{
	private EntityManagerFactory emf;

	public AlumnoRepository(EntityManagerFactory emf) {
		this.emf = emf;
	}
	@Override
	public List<Alumno> findAll() {
		EntityManager em = emf.createEntityManager();
		List<Alumno> lista = em.createNamedQuery("Alumno.findAll",Alumno.class).getResultList();
		//cargamos la información de la tabla relacionada
		for(Alumno c : lista) {
			c.getMatriculas().size();
		}
		em.close();
		return lista;
	}

	@Override
	public Alumno findById(String id) {
		Alumno resultado = null;
		if( id != null) {
			EntityManager em = emf.createEntityManager();
			resultado = em.find(Alumno.class, id);		
			em.close();
		}
		
		return resultado;
	}

	@Override
	public boolean deleteById(String id) {
		boolean ok = false;
		if( id != null) {
			EntityManager em = emf.createEntityManager();
			
			Alumno find = em.find(Alumno.class, id);
			if(find != null) {
				em.getTransaction().begin();
				if(find.getMatriculas() != null && find.getMatriculas().size() > 0) {
					
				}
				em.remove(find);
				em.getTransaction().commit();
				ok = true;
			}
			
			em.close();
		}
		return ok;
	}

	@Override
	public boolean update(Alumno entity) {
		boolean ok = false;
		if( entity != null && entity.getDni() != null) {
			EntityManager em = emf.createEntityManager();
			
			Alumno actualizable = em.find(Alumno.class, entity.getDni());
			if(actualizable != null) {
				em.getTransaction().begin();
				actualizable.setDni(entity.getDni());
				actualizable.setApellidos(entity.getApellidos());
				actualizable.setNombre(entity.getNombre());
				actualizable.setFechanacimiento(entity.getFechanacimiento());
				if(entity.getMatriculas() != null && entity.getMatriculas().size() > 0) {
					actualizable.setMatriculas(entity.getMatriculas());
					for( Matricula matricula : entity.getMatriculas()) {
						actualizable.getMatriculas().add(matricula);
					}
				}
				em.getTransaction().commit();
				ok = true;
			}
			
			em.close();
		}
		return ok;		
	}

	@Override
	public Alumno save(Alumno entity) {
		Alumno alumno = null;
		try {
			EntityManager em = emf.createEntityManager();
			em.getTransaction().begin();
			if(entity.getMatriculas() != null && entity.getMatriculas().size()>0) {
				for(Matricula c: entity.getMatriculas()) {
					Matricula find = em.find(Matricula.class, c.getId());
					if(find == null)
						throw new Exception("no se admite el guardado en cascada de conductores");
				}
			}
			em.persist(entity);
			em.getTransaction().commit();
			

			em.close();
			alumno = entity;
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return alumno;
	}

}
