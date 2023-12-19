import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

type Props = {}

const Ficheros = (props: Props) => {
  const [mensajes, setmensajes] = useState("");
  async function subirfichero(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    let formulario = ev.currentTarget;
    let file = formulario.inputfichero.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        let response = await axios.post(
          "http://localhost:8080/Api/Fichero/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        let respuesta = "";
        if (response.data) {
          respuesta = JSON.stringify(response.data);
        }
        setmensajes(respuesta);
      } catch (error) {
        console.log("error dice: " + error);
      }
    }
  }
  return (
    <div>
      <form onSubmit={subirfichero}>
        <label htmlFor="file">elegir fichero</label>
        <input id="inputfichero" type="file" />
        <button type="submit">Subir</button>
      </form>
      mensajes: {mensajes}
    </div>
  );
}

export default Ficheros

