import React, { useRef, useState } from 'react';

const Practica25 = () => {
  const numerosRef = useRef<number[]>([]);
  const [numeros, setNumeros] = useState<number[]>([]);

  const generarAleatorio = () => {
    const numeroAleatorio=Math.floor(Math.random() * 100);
    numerosRef.current.push(numeroAleatorio);
  };

  const mostrarNumeros = () => {
    setNumeros([...numerosRef.current]);
  };

  return (
    <div>
      <h2>Números Generados</h2>
      <button onClick={generarAleatorio}>Aleatorio</button>
      <button onClick={mostrarNumeros}>Mostrar</button>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default Practica25;