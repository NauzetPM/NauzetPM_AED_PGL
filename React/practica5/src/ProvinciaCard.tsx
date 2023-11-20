import React from 'react';

export type ProvinciaCardProps = {
  name: string;
  image: string;
};

const ProvinciaCard: React.FC<ProvinciaCardProps> = ({ name, image}) => {
    const ruta = `http://localhost:3000/${image}`;
    
  return (
    <div className="PokemonCard">
      <h3>Nombre: {name}</h3>
      <img src={ruta} />
    </div>
  );
};

export default ProvinciaCard;
