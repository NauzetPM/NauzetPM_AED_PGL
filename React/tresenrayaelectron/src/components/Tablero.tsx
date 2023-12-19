// Board.tsx
import React, { useEffect, useState } from 'react';
import Casilla from './Casilla';
import '../styles/TresEnRaya.css';
import axios from 'axios';
import { PartidaProps } from './MostrarPartidas';

interface TableroProps {
    xIsNext: boolean;
    squares: string[];
    onPlay: (squares: string[]) => void;
  }
  
  export function Tablero({ xIsNext, squares, onPlay }: TableroProps) {
    const [Nombre, setNombre] = useState('Jugador'); 
    const [partidasList, setPartidasList] = useState<PartidaProps[]>([]);
    useEffect(() => {
      async function rellenarPartidas() {
        try {
          const response = await axios.get("http://localhost:3000/partidas");
          const arr = response.data;
          const partidas = arr.map(
            (item: {
              id: string;
              nombre:string,
              ganador:string
            }) => ({
              id: item.id,
              nombre:item.nombre,
              ganador:item.ganador
            })
          );
          setPartidasList(partidas);
        } catch (error) {
          console.error("Error data:", error);
        }
      }
      rellenarPartidas();
    }, []);
    function handleClick(i: number) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = 'X';
      onPlay(nextSquares);
      setTimeout(() => {
        if (!calculateWinner(nextSquares) && !nextSquares.every(square => square !== null)) {
          const computerMove = getComputerMove(nextSquares);
          nextSquares[computerMove] = 'O';
          onPlay(nextSquares);
        }
      }, 500);
    }
          
    function getComputerMove(squares: any[]) {
        const emptySquares = squares.reduce((acc, value, index) => (value === null ? [...acc, index] : acc), []);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex];
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
    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);
    let newid= partidasList.length+1;
    if(partidasList===null){
      newid=1;      
    }
    let status;
    if (winner) {
      status = 'Ganador: ' + winner;
      if(status=="Ganador: X"){
        const newPartida = {
            id:newid,
            nombre:Nombre,
            ganador:"Ganador: "+Nombre
        }
        let ruta = "http://localhost:3000/partidas";
        const axiospost = async (ruta: string) => {
            try {
                const response = await axios.post(ruta, newPartida)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
      }else{
        const newPartida = {
          id:newid,
            nombre:Nombre,
            ganador:"Ganador: Ordenador(IA)"
        }
        let ruta = "http://localhost:3000/partidas";
        const axiospost = async (ruta: string) => {
            try {
                const response = await axios.post(ruta, newPartida)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
      }
    } else if (isDraw) {
      status = 'Empate';
      const newPartida = {
        id:newid,
        nombre:Nombre,
        ganador:status
    }
    let ruta = "http://localhost:3000/partidas";
    const axiospost = async (ruta: string) => {
        try {
            const response = await axios.post(ruta, newPartida)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    axiospost(ruta);

    } 
  
    return (
      <>
       <div className="container">
         <input
           type="text"
           className="form-control mb-3"
           placeholder="Nombre Jugador"
           onChange={(e) => setNombre(e.target.value)}
         />
         <div className="text-center mt-3">
           {[0, 1, 2].map(row => (
             <div key={row} className="board-row">
               {[0, 1, 2].map(col => {
                 const index = row * 3 + col;
                 return (
                   <Casilla key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
                 );
               })}
             </div>
           ))}
         </div>
       </div>
      </>
    );
  }
  
