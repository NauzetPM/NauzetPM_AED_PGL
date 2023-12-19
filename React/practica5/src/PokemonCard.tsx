import React from 'react';
import { useAppContext } from './AppPokemonContext';

export type PokemonCardProps = {
  name: string;
  image1: string;
  image2: string;
  image3: string;
  weight: string;
  height: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image1,image2,image3, weight, height }) => {

  const {pokemonfav,setpokemonfav}=useAppContext();

  const handleSetFavorite = () => {
    setpokemonfav({
      name,
      image1,
      image2,
      image3,
      weight,
      height,
    });
    //let pokemonfavstr=name +"-"+ image1 +"-"+ image2 +"-"+ image3 +"-"+ weight +"-"+ height;
    localStorage.clear();
    localStorage.setItem("fav",JSON.stringify(pokemonfav));
  };

  return (
    <div className="PokemonCard">
      <h3>Nombre: {name}</h3>
      <img src={image1} alt={`${name}1`} />
      <img src={image2} alt={`${name}2`} />
      <img src={image3} alt={`${name}3`} />
      <p>Peso: {weight} kg</p>
      <p>Altura: {height} m</p>
      <button onClick={handleSetFavorite}>Establecer Favorito</button>
    </div>
  );
};

export default PokemonCard;
