import React, { useState, useEffect } from 'react';
import './Practica31css.css';
import Partida from './Partida'; // Importa la clase Partida

type StatePartida={
  partida: Partida;
}

const Practica31 = () => {
  let unObjeto: StatePartida;
  unObjeto = {
     partida: new Partida(1)
  }
  //const partida = new Partida(1); // Crea una instancia de la clase Partida

  const [stpartida, setstpartida] = useState(unObjeto)
  stpartida.partida.crearArray();
  setstpartida({ ...stpartida});

  useEffect(() => {
    //partida.restartGame(); // Inicializa la partida al montar el componente
  }, []);

  return (
    <div className="container">
     { /*<h1>Juego Memoria</h1>
      {partida.isVictory ? (
        <div className="victory-message">¡Has ganado el juego!</div>
      ) : (
        <div className={`circle ${partida.isEvenLevel() ? 'even-level' : ''}`}>
          {partida.numeros.map((number:number, index:number) => (
            <button
              key={index}
              onClick={() => partida.handleButtonClick(number)}
              className="circle-button"
            >
              {partida.showAllNumbers || partida.selectedNumbers.includes(number) ? number : null}
            </button>
          ))}
        </div>
      )}
      <p>Contador: {partida.intentos}</p>
          <button onClick={() => partida.restartGame()}>Reiniciar</button>*/}
    </div>
  );
};

export default Practica31;

