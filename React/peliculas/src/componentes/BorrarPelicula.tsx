import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BorrarPelicula() {
  const { id: paramId } = useParams();
  const [id, setId] = useState(paramId || ''); 
  const handleBorrarPelicula = async () => {
    try {

      const peliculaid = id;
      const response = await axios.delete(`http://localhost:3000/peliculas/${peliculaid}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error al borrar la pelicula:', error);
    }
  }

  return (
<div className="container mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ID de la película a borrar"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleBorrarPelicula}
        >
          Borrar Película
        </button>
      </div>
    </div>
  );
}