package es.iespuertodelacruz.npm.main;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import es.iespuertodelacruz.npm.entity.Coches;
import es.iespuertodelacruz.npm.entity.Moneda;

public class Main {

	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("Monedas");
		EntityManager em = emf.createEntityManager();
		List<Coches> resultList = em.createNamedQuery("Coches.findAll",Coches.class).getResultList();
		//resultList.forEach(c->System.out.println(c.getConductores()));
		for(Coches c : resultList){
			System.out.println("coche ="+ c.getMatricula());
			c.getConductores().forEach(conductor->System.out.println("conductor = "+conductor.getNombre()));
		}
		// Practica1
		/*
		 * 
		 * No da pete pero no lo inserta
		 */
		/*
		  Moneda moneda = new Moneda();
		  moneda.setNombre("Lira");
		  moneda.setPais("Turquía");
		  em.persist(moneda);
		 */

		// Practica 2,3
		/*
		 * No da pete y lo inserta en la base de datos
		 */
		/*
		  Moneda moneda = new Moneda();
		  moneda.setNombre("Lira");
		  moneda.setPais("Turquía");
		  em.persist(moneda);
		  em.getTransaction().begin();
		  em.getTransaction().commit();
		 */
		// Practica 4
		/*
		 * En este caso inserta lira2 Turqia
		 */
		/*
		 * Moneda moneda = new Moneda();
		 * moneda.setNombre("Lira1");
		 * moneda.setPais("Turquía");
		 * em.persist(moneda);
		 * em.getTransaction().begin();
		 * moneda.setNombre("lira2");
		 * em.getTransaction().commit();
		 * moneda.setNombre("lira3");
		 * em.close();
		 * emf.close();
		 */
		// Practica 5
		/*
		 * Primer mensaje
		 * 1: en base de datos:
		 * Moneda{idmoneda=1, nombre='Lira32', país='Turquía'}
		 * Segundo
		 * 2: en base de datos:
		 * Moneda{idmoneda=1, nombre='Lira32', país='Turquía'}
		 * Tercer mensaje
		 * 3: en base de datos antes de transact:
		 * Moneda{idmoneda=1, nombre='Lira32', país='Turquía'}
		 * Cuarto y ultimo mensaje
		 * 4: en base de datos: después de transact
		 * Moneda{idmoneda=1, nombre='lira35', país='Turquía'}
		 */
		/*Moneda moneda = new Moneda();
		moneda.setNombre("Lira32");
		moneda.setPais("Turquía");
		em.getTransaction().begin();
		em.persist(moneda); // moneda vigilada → está en contexto
		em.getTransaction().commit(); // moneda guardada en DDBB
		System.out.println("1: en base de datos: ");
		mostrarMonedaEnDDBB(moneda.getIdmoneda(), emf);
		em.close(); // moneda separada→ detached Cambios no persisten en DDBB
		em = emf.createEntityManager(); // nueva conexión a la DDBB
		em.getTransaction().begin(); // transact abierta para grabar en DDBB
		moneda.setNombre("Lira34"); // la moneda detach… ¡¡ no se grabará !!
		em.getTransaction().commit(); // da igual el commit.. no hay efecto
		System.out.println("2: en base de datos: ");
		mostrarMonedaEnDDBB(moneda.getIdmoneda(), emf);
		Moneda monedaVigilada = em.merge(moneda); // monedaVigilada
		// debemos trabajar con monedaVigilada no con moneda para cambios
		// aunque en apariencia el system.out nos las muestra iguales
		System.out.println("monedavigilada: " + monedaVigilada);
		System.out.println("moneda: " + moneda);
		monedaVigilada.setNombre("lira35"); // entity managed
		moneda.setNombre("lira36"); // entity detached
		System.out.println("3: en base de datos antes de transact: ");
		mostrarMonedaEnDDBB(moneda.getIdmoneda(), emf);
		em.getTransaction().begin();
		em.getTransaction().commit(); // ahora sí cambia la DDBB
		System.out.println("4: en base de datos: después de transact");
		mostrarMonedaEnDDBB(moneda.getIdmoneda(), emf);*/
		em.close();
		emf.close();

	}

	public static void mostrarMonedaEnDDBB(
			Integer idmoneda,
			EntityManagerFactory emf) {
		EntityManager em = emf.createEntityManager();
		Moneda moneda = em.find(Moneda.class, idmoneda);
		System.out.println(moneda.getNombre()+","+moneda.getPais());
		em.close();
	}
}
