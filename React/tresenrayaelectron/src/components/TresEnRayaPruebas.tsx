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




