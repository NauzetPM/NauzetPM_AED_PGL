import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export type PartidaProps = {
  id: string;
  nombre: string;
  ganador: string;
};

const MostrarPartidas: React.FC = () => {
  const [partidasList, setPartidasList] = useState<PartidaProps[]>([]);
  useEffect(() => {
    async function rellenarPartidas() {
      try {
        const response = await axios.get("http://localhost:3000/partidas");
        const arr = response.data;
        const partidas = arr.map(
          (item: { id: string; nombre: string; ganador: string }) => ({
            id: item.id,
            nombre: item.nombre,
            ganador: item.ganador,
          })
        );
        setPartidasList(partidas);
      } catch (error) {
        console.error("Error data:", error);
      }
    }
    rellenarPartidas();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Partidas</h2>
      <ul className="list-group">
        {partidasList.map((partida) => (
          <li
            key={partida.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <p>Nombre:{partida.nombre}</p>
            <p>Estado:{partida.ganador}</p>
            <div>
              <Link to={`/editar/${partida.id}`} className="btn btn-danger">
                Editar
              </Link>
              <Link
                to={`/borrar/${partida.id}`}
                className="btn btn-danger ml-2"
              >
                Borrar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarPartidas;
