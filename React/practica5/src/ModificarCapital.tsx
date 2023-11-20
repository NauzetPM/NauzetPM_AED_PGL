import React, { useState } from 'react';
import axios from 'axios';
import AgregarCapital from './AgregarCapital';

export default function ModificarCapital() {

    const handleModificarCapital = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            let formulario: HTMLFormElement = event.currentTarget;
            let inputid: HTMLInputElement = formulario.idCapital;
            let id: string = inputid.value;
            let inputnombre: HTMLInputElement = formulario.nombre;
            let nombre: string = inputnombre.value;
            let inputdatos: HTMLInputElement = formulario.datos;
            let datos: string = inputdatos.value;
            const capitalId = id;
            const newCapital = {
                "id": id,
                "nombre": nombre,
                "datos": datos,
                "foto": ""
            }
            let ruta = "http://localhost:3000/capitales";
            const axiospost = async (rutaPoblacion: string) => {
                try {
                    const response = await axios.put(rutaPoblacion, newCapital)
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            axiospost(ruta);

        } catch (error) {
            console.error('Error al modificar el capital:', error);
        }
    }


    return (
            <form onSubmit={handleModificarCapital}>
                id: <input type="text" name="idCapital" /><br/>
                Nombre: <input type="text" id="nombre" /> <br />
                datos: <input type="text" id="datos" /> <br />
                <button type="submit">Modificar </button>
            </form>
    );
}
