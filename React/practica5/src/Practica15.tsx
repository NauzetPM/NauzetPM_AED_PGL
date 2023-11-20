import React, { useState } from 'react';
import './Practica15css.css'; 

const Practica15 = () => {

  const [color, setColor] = useState('black-text');


  function cambiarColor(nuevoColor:string) {
    setColor(nuevoColor);
  }

  return (
    <div>
      <h4 className={color}>Texto con color</h4>
      <button onClick={() => cambiarColor('green-text')}>Verde</button>
      <button onClick={() => cambiarColor('blue-text')}>Azul</button>
      <button onClick={() => cambiarColor('red-text')}>Rojo</button>
      <button onClick={() => cambiarColor('pink-text')}>Rosa</button>
    </div>
  );
};

export default Practica15;