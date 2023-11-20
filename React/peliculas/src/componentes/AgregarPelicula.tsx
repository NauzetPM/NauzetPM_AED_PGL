import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PeliculaCardProps } from './PeliculasCard';
export default function AgregarPeliculas() {
    const [peliculaList, setPeliculaList] = useState<PeliculaCardProps[]>([]);
    const [formValues, setFormValues] = useState({
        titulo: '',
        direccion: '',
        actores: '',
        argumento: '',
        categoria: '',
        url: '',
        imagen: '',
      });
      useEffect(() => {
        rellenarPeliculaData();
    }, []); // El segundo argumento del useEffect, un array vacío, indica que se ejecutará solo después del montaje inicial.

    async function rellenarPeliculaData() {
        try {
            const response = await axios.get("http://localhost:3000/peliculas");
            const arr = response.data;
            const peliculas = arr.map((item: { id: string, titulo: string; direccion: string; actores: string; argumento: string; imagen: string; categoria: string; url: string; }) => ({
                id: item.id,
                titulo: item.titulo,
                direccion: item.direccion,
                actores: item.actores,
                argumento: item.argumento,
                imagen: item.imagen,
                categoria: item.categoria,
                url: item.url
            }));
            console.log(peliculas);
            setPeliculaList(peliculas);
        } catch (error) {
            console.error('Error data:', error);
        }
    }
    function agregarPeliculaApi(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const lastPelicula = peliculaList[peliculaList.length - 1];
        const lastId = lastPelicula ? parseInt(lastPelicula.id, 10) : 0;
        const num0 = 3-(lastId).toString.length;
        const id = (lastId + 1).toString().padStart(num0, '0');
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
            titulo: '',
        direccion: '',
        actores: '',
        argumento: '',
        categoria: '',
        url: '',
        imagen: '',
        });
        let ruta = "http://localhost:3000/peliculas";
        const axiospost = async (ruta: string) => {
            try {
                const response = await axios.post(ruta, newPelicula)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
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
                Categoria: <input type="text" name="categoria" value={formValues.categoria} onChange={handleInputChange} /> <br />
                Url: <input type="text" name="url" value={formValues.url} onChange={handleInputChange} /> <br />
                Imagen: <input type="text" name="imagen" value={formValues.imagen} onChange={handleInputChange} /> <br />
                <button type="submit">Crear </button>
            </form>
        </>*/ 
