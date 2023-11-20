import React, { Component, ReactComponentElement, useState } from 'react';
import Practica14 from './Practica14';

type Props={
  palabra:string;
}
const InfoPalabra = (props:Props) => {
  const cantidadLetras = props.palabra.length;

  return (
    <div>
      <p>Cantidad de letras: {cantidadLetras}</p>
    </div>
  );
};

const Practica26 = () => {
  const [inputText, setInputText] = useState('');
  const [componenteMostrado, setComponenteMostrado] = useState<any>("");
  const handleMostrarTabla = () => {
    const numero = parseFloat(inputText);
    if (!isNaN(numero)) {
      setComponenteMostrado(<Practica14/>);
    } else {
      setComponenteMostrado(<InfoPalabra  palabra={inputText} />);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduce un número o palabra"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleMostrarTabla}>Mostrar</button>
      {componenteMostrado}
    </div>
  );
};

export default Practica26;