// Game.tsx
import React, { useState, useEffect } from 'react';
import { Tablero } from './Tablero';


export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    useEffect(() => {
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
    function handleRestart() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
      }
      
    function getComputerMove(squares: any[]) {
        const emptySquares = squares.reduce((acc, value, index) => (value === null ? [...acc, index] : acc), []);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex];
      }
      return (
        <div className="game">
          <div className="game-board">
            <Tablero xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleRestart}>
              Partida Nueva
            </button>
          </div>
        </div>
      );
  }
