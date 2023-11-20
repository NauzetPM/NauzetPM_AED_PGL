import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "./PeliculaContext";
import { PeliculaCardProps } from "./PeliculasCard";

const InfoPelicula: React.FC = () => {
  const { id: paramId } = useParams();

  const [peliculadata, setpeliculadata] = useState({
    id: paramId || "",
    titulo: "",
    direccion: "",
    actores: "",
    argumento: "",
    categoria: "",
    url: "",
    imagen: "",
  });

  const { peliculasfav, marcarfav } = useAppContext();

  function addDeletedFav() {
    console.log("peliculas fav" +peliculasfav);
    if(peliculadata){
      let array:PeliculaCardProps[]=peliculasfav;
      marcarfav([...peliculasfav,peliculadata])
      /*array.push(peliculadata);
        marcarfav(array);*/
    }
    /*localStorage.clear();
    localStorage.setItem("fav", JSON.stringify(peliculasfav));*/
  }

  useEffect(() => {
    const cargarDatosPelicula = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/peliculas/${paramId}`
        );
        const pelicula = response.data;
        setpeliculadata({
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
        console.error("Error al cargar los datos de la película:", error);
      }
    };

    if (paramId) {
      cargarDatosPelicula();
    }
  }, [paramId]);

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Detalles de la Película</h2>
      <div className="card">
        <img
          src={`http://localhost:3000/${peliculadata.imagen}`}
          alt={peliculadata.titulo}
          className="card-img-top img-fluid w-25 mx-auto"
        />
        <div className="card-body">
          <h5 className="card-title">{peliculadata.titulo}</h5>
          <p className="card-text">{peliculadata.argumento}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Actores:</strong> {peliculadata.actores}
            </li>
            <li className="list-group-item">
              <strong>Categoría:</strong> {peliculadata.categoria}
            </li>
            <li className="list-group-item">
              <strong>Dirección:</strong> {peliculadata.direccion}
            </li>
            <li className="list-group-item mx-auto">
              <ReactPlayer
                url={`<${peliculadata.url}>`}
                controls
                width="400px"
                height="200px"
              />
            </li>
          </ul>
          <div className="mt-3 text-center">
            <Link to={`/editar/${peliculadata.id}`} className="btn btn-warning">
              Editar
            </Link>
            <Link
              to={`/borrar/${peliculadata.id}`}
              className="btn btn-danger ml-2"
            >
              Borrar
            </Link>
            <button
              className="btn btn-primary ml-2"
              onClick={() => addDeletedFav()}
            >
              Añadir/Quitar favorito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPelicula;
