// PokemonFavorite.tsx
import React from "react";

import PokemonCard from "./PokemonCard";
import { useAppContext } from "./AppPokemonContext";

const PokemonFavorito: React.FC = () => {
    const {pokemonfav,setpokemonfav}=useAppContext();

  return (
    <div className="PokemonFavorite">
      {pokemonfav.name!=undefined ? (
        <>
          <h2>Pokémon Favorito</h2>
          <div className="PokemonCard">
             <h3>Nombre: {pokemonfav.name}</h3>
            <img src={pokemonfav.image1} />
            <img src={pokemonfav.image2}  />
            <img src={pokemonfav.image3}  />
             <p>Peso: {pokemonfav.weight} kg</p>
             <p>Altura: {pokemonfav.height} m</p>
    </div>
        </>
      ) : (
        <p>No hay un Pokémon favorito seleccionado.</p>
      )}
    </div>
  );
};

export default PokemonFavorito;
