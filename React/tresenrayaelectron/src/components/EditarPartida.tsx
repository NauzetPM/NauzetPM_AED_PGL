import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function EditarPartida() {
    const { id: paramId } = useParams(); // Obtener el parámetro de la URL
    const [formValues, setFormValues] = useState({
      id: paramId || '',
      nombre: '',
      ganador: '',
    });
  
    useEffect(() => {
      if (paramId) {
        cargarDatosPartida();
      }
    }, [paramId]);
  
    const cargarDatosPartida = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/partidas/${paramId}`);
        const partida = response.data;
        setFormValues({
          id: partida.id,
          nombre: partida.nombre,
          ganador: partida.ganador,
        });
      } catch (error) {
        console.error('Error al cargar los datos de la partida:', error);
      }
    };
    function modificarPartidaApi(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let id=formValues.id;
        let nombre=formValues.nombre;
        let ganador=formValues.ganador;
        const newPelicula = {
            id,
            nombre,
            ganador
        }
        setFormValues({
            id:'',
            nombre: '',
        ganador: ''
        });
        let ruta = `http://localhost:3000/partidas/${formValues.id}`;
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
        <form onSubmit={modificarPartidaApi} className="col-md-6 offset-md-3 bg-light p-4 rounded">
          <h2 className="text-center mb-4">Editar Partida</h2>
        
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Id:</label>
            <input type="text" name="id" className="form-control" value={formValues.id} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input type="text" name="nombre" className="form-control" value={formValues.nombre} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Ganador:{formValues.ganador}</label>
          </div>
          <button type="submit" className="btn btn-primary">Editar</button>
        </form>
      </div>

    )
}