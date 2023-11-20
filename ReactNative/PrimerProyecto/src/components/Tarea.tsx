import React from 'react';

export type TareaProps = {
  contenido:string,
  activa:boolean,
  titulo:string,
  id:number,
};

const  Tarea: React.FC<TareaProps> = ({contenido,activa,titulo,id}) => {
    
  return (
    <div className="PeliculaCard">
        <h3>contenido:{contenido}</h3>
        <h3>activa:{activa}</h3>
        <h3>titulo:{titulo}</h3>
    </div>
  );
};

export default Tarea;
