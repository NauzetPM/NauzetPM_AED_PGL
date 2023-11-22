import { SetStateAction, useState, useEffect } from 'react';
import './TresEnRaya.css';

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    onPlay(nextSquares);

    // Realizar la jugada de la computadora después de un breve retraso (simulando la "pensada" de la computadora)
    setTimeout(() => {
      if (!calculateWinner(nextSquares) && !nextSquares.every(square => square !== null)) {
        const computerMove = getComputerMove(nextSquares);
        nextSquares[computerMove] = 'O';
        onPlay(nextSquares);
      }
    }, 500);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  let status;
  if (winner) {
    status = 'Ganador: ' + winner;
  } else if (isDraw) {
    status = 'Empate';
  } else {
    status = 'Siguiente jugador: ' + (xIsNext ? 'Tu turno (X)' : 'Turno de la computadora (O)');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {[0, 1, 2].map(row => (
          <div key={row} className="board-row">
            {[0, 1, 2].map(col => {
              const index = row * 3 + col;
              return (
                <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    // Realizar la jugada de la computadora cuando cambia el estado
    if (!xIsNext && currentMove < history.length - 1) {
      const computerMove = getComputerMove(currentSquares);
      const nextSquares = currentSquares.slice();
      nextSquares[computerMove] = 'O';
      handlePlay(nextSquares);
    }
  }, [currentSquares, xIsNext, currentMove, history]);

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  );
}
function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getComputerMove(squares: any[]) {
  // Lógica para determinar la jugada de la computadora (puedes personalizar esto según tu preferencia)
  const emptySquares = squares.reduce((acc, value, index) => (value === null ? [...acc, index] : acc), []);
  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[randomIndex];
}

