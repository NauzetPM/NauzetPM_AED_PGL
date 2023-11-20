import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function AgregarCapital() {
    let {unaprueba}  = useParams();
    function agregarCapitalApi(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let formulario: HTMLFormElement = event.currentTarget;
        let inputid: HTMLInputElement = formulario.idCapital;
        let id: string = inputid.value;
        let inputnombre: HTMLInputElement = formulario.nombre;
        let nombre: string = inputnombre.value;
        let inputdatos: HTMLInputElement = formulario.datos;
        let datos: string = inputdatos.value;

        formulario.idCapital="";
        formulario.nombre="";
        formulario.datos="";
        const newCapital = {
            "id": id,
            "nombre": nombre,
            "datos":datos,
            "foto": ""
        }
        let ruta = "http://localhost:3000/capitales";
        const axiospost = async (rutaPoblacion: string) => {
            try {
                const response = await axios.post(rutaPoblacion, newCapital)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
    }
    return (
        <>
            <form onSubmit={agregarCapitalApi}>
                id: <input type="text" name="idCapital" /><br />
                Nombre: <input type="text" id="nombre" /> <br />
                datos: <input type="text" id="datos" /> <br />
                <button type="submit">Crear </button>
            </form>
            
            <p>
            {unaprueba}
            </p>
        </>
    )
}