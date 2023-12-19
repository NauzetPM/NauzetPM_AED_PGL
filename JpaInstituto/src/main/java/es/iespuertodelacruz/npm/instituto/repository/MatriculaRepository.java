package es.iespuertodelacruz.npm.instituto.repository;

import java.util.List;

import javax.persistence.EntityGraph;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import es.iespuertodelacruz.npm.instituto.entities.Asignatura;
import es.iespuertodelacruz.npm.instituto.entities.Matricula;

public class MatriculaRepository implements ICRUD<Matricula, String> {
    private EntityManagerFactory emf;

    public MatriculaRepository(EntityManagerFactory emf) {
        this.emf = emf;
    }

    @Override
    public List<Matricula> findAll() {
        EntityManager em = emf.createEntityManager();
        List<Matricula> lista = em.createNamedQuery("Matricula.findAll", Matricula.class).getResultList();
        em.close();
        return lista;
    }

    @Override
    public Matricula findById(String id) {
        Matricula resultado = null;

        if (id != null) {
            int newId = Integer.parseInt(id);
            EntityManager em = emf.createEntityManager();
            resultado = em.find(Matricula.class, newId);
            em.close();
        }

        return resultado;
    }
    public List<Matricula> findAllRel() {
        EntityManager em = emf.createEntityManager();
        EntityGraph<?> graph = em.getEntityGraph("Matricula.asignaturas");
        List<Matricula> lista = em.createNamedQuery("Matricula.findAll", Matricula.class)
                .setHint("javax.persistence.fetchgraph", graph)
                .getResultList();
        em.close();
        return lista;
    }



    public Matricula findByIdRel(String id) {
        Matricula resultado = null;

        if (id != null) {
            int newid = Integer.parseInt(id);
            EntityManager em = emf.createEntityManager();
            resultado = em.find(Matricula.class, newid);

            if (resultado != null) {
                resultado.getAsignaturas().size();
            }
            em.close();
        }

        return resultado;
    }

    @Override
    public boolean deleteById(String id) {
        boolean ok = false;
        if (id != null) {
            int newid = Integer.parseInt(id);
            EntityManager em = emf.createEntityManager();

            Matricula find = em.find(Matricula.class, newid);
            if (find != null) {
                em.getTransaction().begin();

                List< Asignatura> asignaturas = find.getAsignaturas();
                for (Asignatura asignatura : asignaturas) {
                    em.remove(asignatura);
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
    public boolean update(Matricula entity) {
        boolean ok = false;
        if (entity != null) {
            EntityManager em = emf.createEntityManager();
            try {
                em.getTransaction().begin();

                // Buscar la entidad existente en la base de datos por su ID
                Matricula existingEntity = em.find(Matricula.class, entity.getId());

                // Verificar si la entidad existe
                if (existingEntity != null) {
                    // Copiar los atributos de la entidad actualizada a la entidad existente
                    existingEntity.setYear(entity.getYear());
                    // Copiar otras propiedades según sea necesario

                    em.getTransaction().commit();
                    ok = true;
                } else {
                    // La entidad no existe en la base de datos
                    System.out.println("No se encontró la entidad con ID: " + entity.getId());
                }
            } catch (Exception ex) {
                if (em.getTransaction().isActive()) {
                    em.getTransaction().rollback();
                }
                ex.printStackTrace();
            } finally {
                em.close();
            }
        }
        return ok;
    }







    @Override
    public Matricula save(Matricula entity) {
        Matricula matricula = null;
        try {
            EntityManager em = emf.createEntityManager();
            em.getTransaction().begin();

            // Guardar las asignaturas de la matrícula
            List<Asignatura> asignaturas = entity.getAsignaturas();
            if (asignaturas != null) {
                for (Asignatura asignatura : asignaturas) {
                    em.persist(asignatura);
                }
            }

            // Guardar la matrícula
            em.persist(entity);
            em.getTransaction().commit();

            // Refrescar la entidad después de la transacción para cargar las asignaturas
            em.refresh(entity);

            em.close();
            matricula = entity;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return matricula;
    }




}
