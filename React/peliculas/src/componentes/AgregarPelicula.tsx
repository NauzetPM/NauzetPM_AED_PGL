import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { PeliculaCardProps } from './PeliculasCard';
export default function AgregarPeliculas() {
  const [peliculaList, setPeliculaList] = useState<PeliculaCardProps[]>([]);
  const [formValues, setFormValues] = useState({
    titulo: '',
    direccion: '',
    actores: '',
    argumento: '',
    categorias: '',
    url: '',
    imagen: '',
  });

  useEffect(() => {
    rellenarPeliculaData();
  }, []);

  async function rellenarPeliculaData() {
    try {
      const response = await axios.get("http://localhost:8080/Api/Peliculas/");
      const peliculas = response.data.map((pelicula: any) => ({
        id: pelicula.id,
        titulo: pelicula.titulo,
        direccion: pelicula.direccion,
        actores: pelicula.actores,
        argumento: pelicula.argumento,
        imagen: pelicula.imagen,
        categoria: pelicula.categoria,
        url: pelicula.url,
      }));
      setPeliculaList(peliculas);
    } catch (error) {
      console.error('Error data:', error);
    }
  }

  function agregarPeliculaApi(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

   

    const newPelicula = {
      actores: formValues.actores,
      argumento: formValues.argumento,
      direccion: formValues.direccion,
      imagen: formValues.imagen,
      titulo: formValues.titulo,
      trailer: formValues.url,
      categorias: formValues.categorias.split(',').map(Number),
    };

    console.log(newPelicula);

    setFormValues({
      titulo: '',
      direccion: '',
      actores: '',
      argumento: '',
      categorias: '',
      url: '',
      imagen: '',
    });

    const ruta = "http://localhost:8080/Api/Peliculas/";
    axios.post(ruta, newPelicula)
      .then(response => {
        console.log(response.data);
        rellenarPeliculaData(); // Actualizar la lista después de agregar una nueva película
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
    return (
        <div className="container mt-5">
        <form onSubmit={agregarPeliculaApi} className="col-md-6 offset-md-3 bg-light p-4 rounded">
          <h2 className="text-center mb-4">Agregar Película</h2>
  
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
            <input type="text" name="categorias" className="form-control" value={formValues.categorias} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen:</label>
            <input type="text" name="imagen" className="form-control" value={formValues.imagen} onChange={handleInputChange} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="url" className="form-label">Url:</label>
            <input type="text" name="url" className="form-control" value={formValues.url} onChange={handleInputChange} />
          </div>
  
          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    )
}
/*        <>
            <form onSubmit={agregarPeliculaApi}>
                Titulo: <input type="text" name="titulo" value={formValues.titulo} onChange={handleInputChange} /><br />
                Direccion: <input type="text" name="direccion" value={formValues.direccion} onChange={handleInputChange} /> <br />
                Actores: <input type="text" name="actores" value={formValues.actores} onChange={handleInputChange} /> <br />
                Argumento: <input type="text" name="argumento" value={formValues.argumento} onChange={handleInputChange} /> <br />
                Categoria: <input type="text" name="categorias" value={formValues.categorias} onChange={handleInputChange} /> <br />
                Url: <input type="text" name="url" value={formValues.url} onChange={handleInputChange} /> <br />
                Imagen: <input type="text" name="imagen" value={formValues.imagen} onChange={handleInputChange} /> <br />
                <button type="submit">Crear </button>
            </form>
        </>*/ 
