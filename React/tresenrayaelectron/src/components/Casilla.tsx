// Square.tsx
import React from 'react';

interface CasillaProps {
  value: string;
  onSquareClick: () => void;
}

function Casilla({ value, onSquareClick }: CasillaProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Casilla;
