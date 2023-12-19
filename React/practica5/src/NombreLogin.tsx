import React from "react";
import { useAppContext } from "./LoginContext";


const NombreLogin: React.FC = () => {
    const {stateNombre,setstateNombre}=useAppContext();

  return (
    <div className="PokemonFavorite">
      {stateNombre!="" ? (
        <>
             <h3>Hola:{stateNombre}</h3>
        </>
      ) : (
        <p>No te has logeado.</p>
      )}
    </div>
  );
};

export default NombreLogin;
