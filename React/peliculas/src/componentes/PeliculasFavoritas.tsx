import React, { useState } from "react";
import { useAppContext } from "./PeliculaContext";
import { Link } from "react-router-dom";
import { PeliculaCardProps } from "./PeliculasCard";

const PeliculasFavorita: React.FC = () => {
  const { peliculasfav, marcarfav } = useAppContext();
  const [peliculaList, setPeliculaList] = useState<PeliculaCardProps[]>(peliculasfav);

  return (
    <div className="container mt-3">
      {peliculaList.length === 0 ? (
        <p>No tienes películas favoritas.</p>
      ) : (
        <ul className="list-group">
          {peliculaList.map((pelicula) => (
            <li
              key={pelicula.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {pelicula.titulo}
              <img
                src={`http://localhost:3000/${pelicula.imagen}`}
                alt={pelicula.titulo}
              />
              <div>
                <Link to={`/info/${pelicula.id}`} className="btn btn-danger">
                  Info
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PeliculasFavorita;


