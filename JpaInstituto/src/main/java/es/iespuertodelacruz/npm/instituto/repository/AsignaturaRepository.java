package es.iespuertodelacruz.npm.instituto.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import es.iespuertodelacruz.npm.instituto.entities.Alumno;
import es.iespuertodelacruz.npm.instituto.entities.Asignatura;
import es.iespuertodelacruz.npm.instituto.entities.Matricula;

public class AsignaturaRepository implements ICRUD<Asignatura,String>{
	private EntityManagerFactory emf;

	public AsignaturaRepository(EntityManagerFactory emf) {
		this.emf = emf;
	}
	@Override
	public List<Asignatura> findAll() {
		EntityManager em = emf.createEntityManager();
		List<Asignatura> lista = em.createNamedQuery("Asignatura.findAll",Asignatura.class).getResultList();
		//cargamos la información de la tabla relacionada
		for(Asignatura c : lista) {
			c.getMatriculas().size();
		}
		em.close();
		return lista;
	}

	@Override
	public Asignatura findById(String id) {
		Asignatura resultado = null;
		
		if( id != null) {
			int newid=Integer.parseInt(id);
			EntityManager em = emf.createEntityManager();
			resultado = em.find(Asignatura.class, newid);		
			em.close();
		}
		
		return resultado;
	}

	@Override
	public boolean deleteById(String id) {
		
		boolean ok = false;
		if( id != null) {
			int newid=Integer.parseInt(id);
			EntityManager em = emf.createEntityManager();
			
			Asignatura find = em.find(Asignatura.class, newid);
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
	public boolean update(Asignatura entity) {
		boolean ok = false;
		if( entity != null) {
			EntityManager em = emf.createEntityManager();
			
			Asignatura actualizable = em.find(Asignatura.class, entity.getId());
			if(actualizable != null) {
				em.getTransaction().begin();
				actualizable.setId(entity.getId());
				actualizable.setCurso(entity.getCurso());
				actualizable.setNombre(entity.getNombre());
				if(entity.getMatriculas() != null) {
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
	public Asignatura save(Asignatura entity) {
		Asignatura alumno = null;
		try {
			EntityManager em = emf.createEntityManager();
			em.getTransaction().begin();
			if(entity.getMatriculas() != null && entity.getMatriculas().size()>0) {
				for(Matricula c: entity.getMatriculas()) {
					Matricula find = em.find(Matricula.class, c.getId());
					if(find == null)
						throw new Exception("no se admite el guardado en cascada de asignaturas");
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
