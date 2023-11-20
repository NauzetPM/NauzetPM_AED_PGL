import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function ModificarPelicula() {
    const { id: paramId } = useParams(); // Obtener el parámetro de la URL
    const [formValues, setFormValues] = useState({
      id: paramId || '',
      titulo: '',
      direccion: '',
      actores: '',
      argumento: '',
      categoria: '',
      url: '',
      imagen: '',
    });
  
    useEffect(() => {
      if (paramId) {
        cargarDatosPelicula();
      }
    }, [paramId]);
  
    const cargarDatosPelicula = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/peliculas/${paramId}`);
        const pelicula = response.data;
        setFormValues({
          id: pelicula.id,
          titulo: pelicula.titulo,
          direccion: pelicula.direccion,
          actores: pelicula.actores,
          argumento: pelicula.argumento,
          categoria: pelicula.categoria,
          url: pelicula.url,
          imagen: pelicula.imagen,
        });
      } catch (error) {
        console.error('Error al cargar los datos de la película:', error);
      }
    };
    function modificarPeliculaApi(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let id=formValues.id;
        let titulo=formValues.titulo;
        let direccion=formValues.direccion;
        let actores=formValues.actores;
        let argumento=formValues.argumento;
        let imagen=formValues.imagen;
        let categoria=formValues.categoria;
        let url=formValues.url;


        const newPelicula = {
            id,
            titulo,
            direccion,
            actores,
            argumento,
            imagen,
            categoria,
            url
        }
        setFormValues({
            id:'',
            titulo: '',
        direccion: '',
        actores: '',
        argumento: '',
        categoria: '',
        url: '',
        imagen: '',
        });
        let ruta = `http://localhost:3000/peliculas/${formValues.id}`;
        const axiospost = async (ruta: string) => {
            try {
                const response = await axios.put(ruta, newPelicula)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
    }

    return (
        <div className="container mt-5">
        <form onSubmit={modificarPeliculaApi} className="col-md-6 offset-md-3 bg-light p-4 rounded">
          <h2 className="text-center mb-4">Editar Película</h2>
        
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Id:</label>
            <input type="text" name="id" className="form-control" value={formValues.id} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo:</label>
            <input type="text" name="titulo" className="form-control" value={formValues.titulo} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Direccion:</label>
            <input type="text" name="direccion" className="form-control" value={formValues.direccion} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="actores" className="form-label">Actores:</label>
            <input type="text" name="actores" className="form-control" value={formValues.actores} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="argumento" className="form-label">Argumento:</label>
            <textarea name="argumento" className="form-control" value={formValues.argumento} onChange={(e) => handleInputChange(e)} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoria:</label>
            <input type="text" name="categoria" className="form-control" value={formValues.categoria} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen:</label>
            <input type="text" name="imagen" className="form-control" value={formValues.imagen} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="url" className="form-label">Url:</label>
            <input type="text" name="url" className="form-control" value={formValues.url} onChange={handleInputChange} />
          </div>
  
          <button type="submit" className="btn btn-primary">Editar</button>
        </form>
      </div>

    )
}
/*
        <>
            <form onSubmit={modificarPeliculaApi}>
                ID:<input type="text" name="id" value={formValues.id} onChange={handleInputChange}/><br />
                Titulo: <input type="text" name="titulo" value={formValues.titulo} onChange={handleInputChange} /><br />
                Direccion: <input type="text" name="direccion" value={formValues.direccion} onChange={handleInputChange} /> <br />
                Actores: <input type="text" name="actores" value={formValues.actores} onChange={handleInputChange} /> <br />
                Argumento: <input type="text" name="argumento" value={formValues.argumento} onChange={handleInputChange} /> <br />
                Categoria: <input type="text" name="categoria" value={formValues.categoria} onChange={handleInputChange} /> <br />
                Url: <input type="text" name="url" value={formValues.url} onChange={handleInputChange} /> <br />
                Imagen: <input type="text" name="imagen" value={formValues.imagen} onChange={handleInputChange} /> <br />
                <button type="submit">Modificar </button>
            </form>
            
        </> */