import React, { useState, useRef } from 'react';
type Props={

}
const Practica24 = (props:Props) => {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [numeroSecreto] = useState(generarNumeroSecreto());
  const [mensaje, setMensaje] = useState('');
  

  function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10);
  }

  function apostar() {
    if (inputRef.current) {
    const numero = parseInt(inputRef.current.value);

    if (!isNaN(numero)) {
      if (numero === numeroSecreto) {
        setMensaje(`¡Has acertado! El número secreto es ${numeroSecreto}`);
      } else if (numero < numeroSecreto) {
        setMensaje(`El número secreto es mayor que ${numero}`);
      } else {
        setMensaje(`El número secreto es menor que ${numero}`);
      }
    } else {
      setMensaje('Por favor, introduce un número válido.');
    }
  }
  }

  return (
    <div>
      <h1>Juego de Acertar el Número Secreto</h1>
      <p>{mensaje}</p>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={apostar}>Apostar</button>
      </div>
    </div>
  );
};

export default Practica24;