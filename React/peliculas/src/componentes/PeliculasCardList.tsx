import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import PeliculaCard, { PeliculaCardProps } from "./PeliculasCard";
import { Link } from "react-router-dom";
import PeliculasFavorita from "./PeliculasFavoritas";
import { PeliculaContext, useAppContext } from "./PeliculaContext";

const PeliculasCardList: React.FC = () => {
  const [peliculaList, setPeliculaList] = useState<PeliculaCardProps[]>([]);
  useEffect(() => {
    async function rellenarPelicukaData() {
      try {
        const response = await axios.get("http://localhost:8080/Api/Peliculas/");
        const arr = response.data;
        const peliculas = arr.map(
          (item: {
            id: string;
            titulo: string;
            direccion: string;
            actores: string;
            argumento: string;
            imagen: string;
            categoria: string;
            url: string;
          }) => ({
            id: item.id,
            titulo: item.titulo,
            direccion: item.direccion,
            actores: item.actores,
            argumento: item.argumento,
            imagen: item.imagen,
            categoria: item.categoria,
            url: item.url,
          })
        );
        setPeliculaList(peliculas);
      } catch (error) {
        console.error("Error data:", error);
      }
    }
    /*const peliculasfavSorege = JSON.parse(localStorage.getItem("fav") || "{}");
    console.log(peliculasfavSorege);
    if (peliculasfavSorege != null) {
      marcarfav({
        ...peliculasfavSorege,
      });
    }*/

    rellenarPelicukaData();
  }, []);
  async function filtrarCategoria(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formulario = event.currentTarget;
    let inputNombre = formulario.categoria;
    let nombreCategoria = inputNombre.value;
  
    try {
      const response = await axios.get("http://localhost:8080/Api/Peliculas/");
  
      const arr = response.data;
      
      const peliculas = arr.map((item: any) => {
        // Mantenemos el array de categorías
        const categorias = item.categorias;
  
        // Usamos el método some() para verificar si alguna categoría coincide con el nombre buscado
        if (categorias.some((categoria: any) => categoria.nombre === nombreCategoria)) {
          return {
            id: item.id,
            titulo: item.titulo,
            direccion: item.direccion,
            actores: item.actores,
            argumento: item.argumento,
            imagen: item.imagen,
            categorias: item.categorias,
            url: item.trailer,
          };
        } else {
          // Si no hay coincidencia, retornamos null
          return null;
        }
      });
  
      // Filtramos las películas que no son nulas
      const peliculasFiltradas = peliculas.filter((pelicula: any) => pelicula !== null);
  
      setPeliculaList(peliculasFiltradas);
    } catch (error) {
      console.error("Error al filtrar películas por categoría:", error);
    }
  }
  
  
  
  async function filtrarNombre(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    let formulario = event.currentTarget;
    let inputTitulo = formulario.titulo;
    let titulo = inputTitulo.value;
  
    try {
      const response = await axios.get("http://localhost:8080/Api/Peliculas/");
      const arr = response.data;
  
      // Filtrar localmente por coincidencias parciales en el título
      const peliculas = arr.filter((item: any) =>
        item.titulo.toLowerCase().includes(titulo.toLowerCase())
      );
  
      setPeliculaList(peliculas);
    } catch (error) {
      console.error("Error al filtrar películas por título:", error);
    }
  }

  return (
      <div className="container mt-3">
        <form onSubmit={filtrarCategoria} className="col-md-6 offset-md-3 bg-light p-4 rounded">
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoria:</label>
            <input type="text" name="categoria" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Buscar por categoria</button>
        </form>
        <form onSubmit={filtrarNombre} className="col-md-6 offset-md-3 bg-light p-4 rounded">
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo:</label>
            <input type="text" name="titulo" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Buscar por titulo</button>
        </form>
        <h2>Peliculas Favoritas</h2>
        <PeliculasFavorita />
        <h2>Películas</h2>
        <ul className="list-group">
          {peliculaList.map((pelicula) => (
            <li
              key={pelicula.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {pelicula.titulo}
              <img src={`http://localhost:8080/Api/Fichero/ficheros/${pelicula.imagen}`} />
              <div>
                <Link to={`/info/${pelicula.id}`} className="btn btn-danger">
                  Info
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default PeliculasCardList;
