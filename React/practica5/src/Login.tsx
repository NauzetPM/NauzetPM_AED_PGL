import React, { useState } from "react";
import { useAppContext } from "./LoginContext";


const Login = ({ }) => {
    const {stateNombre,setstateNombre}=useAppContext();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formulario = event.currentTarget;
    let inputnombre = formulario.nombre;
    let nombre = inputnombre.value;
    setstateNombre(nombre);
  };

  return (  
            <form onSubmit={handleLogin}>
                Nombre: <input type="text" id="nombre" /> <br />
                <button type="submit">Login </button>
            </form>
  );
};

export default Login;

