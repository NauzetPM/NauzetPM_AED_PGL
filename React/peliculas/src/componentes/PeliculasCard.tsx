import React from 'react';

export type PeliculaCardProps = {
  id:string,
  titulo:string;
  direccion:string;
  actores:string;
  argumento:string;
  categoria:string;
  url:string;
  imagen: string;
};

const  PeliculaCard: React.FC<PeliculaCardProps> = ({ id,titulo,direccion,actores
    ,argumento,categoria,url, imagen}) => {
    const rutaimagen = `http://localhost:3000/${imagen}`;
    
  return (
    <div className="PeliculaCard">
      <h3>ID: {id}</h3>
      <h3>Titulo: {titulo}</h3>
      <img src={rutaimagen} />
      <h3>Direccion: {direccion}</h3>
      <h3>Actores: {actores}</h3>
      <h3>Argumento: {argumento}</h3>
      <h3>Categoria: {categoria}</h3>
      <h3>url: {url}</h3>
    </div>
  );
};

export default PeliculaCard;
