import React, { useState, useEffect, useRef } from 'react';
import './Practica31css.css';

const Practica31 = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(1);
  const intentosRef = useRef(0);
  const [intentos, setIntentos] = useState(0);
  const [lvl, setlvl] = useState(1);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [showAllNumbers, setShowAllNumbers] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [victoryCount, setVictoryCount] = useState(0);
  const finallvl=2;
  useEffect(() => {
    let numeros: number[] = [];
    let currentVictoryCount = 0; 

    if (lvl === 1) {
      numeros = [1, 2, 3, 4, 5, 6, 7, 8];
      currentVictoryCount = numeros.length;
    } else if (lvl === 2) {
      numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      currentVictoryCount = numeros.length; // Set the victory count
      intentosRef.current = intentos;
    }
    
    setVictoryCount(currentVictoryCount); 
    const numerosdesordenados = desordenar(numeros);
    setNumbers(numerosdesordenados);

    const timer = setTimeout(() => {
      setShowAllNumbers(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [lvl]);

  function desordenar(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleButtonClick = (number: number) => {
    setIntentos(intentos+1);
    if (number === count && !selectedNumbers.includes(number)) {
      setSelectedNumbers((prevSelectedNumbers) => [...prevSelectedNumbers, number]);
      setCount((prevCount) => prevCount + 1);

      if (count === victoryCount) {
        if(lvl!==finallvl){
          setlvl(lvl+1);
          setSelectedNumbers([]);
          setCount(1);
          setIntentos(0);
          setShowAllNumbers(true);
        }else{
          setIsVictory(true);
        }
      }
    }
    intentosRef.current = intentos;
    if (intentosRef.current > numbers.length * 2) {
      alert("¡Has perdido el juego!");
    }
  };

  const restartGame = () => {
    setlvl(1); // Reinicia al nivel 1
    setShowAllNumbers(true); // Muestra todos los números
    setCount(1); // Reinicia el contador a 1
    setSelectedNumbers([]); // Borra los números seleccionados
    setIntentos(0);
    intentosRef.current = intentos; // Reinicia el contador de intentos
    setIsVictory(false); // Reset victory status
    window.location.reload(); // Recarga la página
  };
  const isEvenLevel = lvl % 2 !== 0;
  return (
    <div className="container">
      <h1>Juego Memoria</h1>
      {isVictory ? (
        <div className="victory-message">¡Has ganado el juego!</div>
      ) : (
        <div className={`circle ${isEvenLevel ? 'even-level' : ''}`}>
          {numbers.map((number, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(number)}
              className="circle-button"
            >
              {showAllNumbers || selectedNumbers.includes(number) ? number : null}
            </button>
          ))}
        </div>
      )}
      <p>Contador: {intentosRef.current}</p>
      <button onClick={restartGame}>Reiniciar</button>
    </div>
  );
};

export default Practica31;