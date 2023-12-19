import React from 'react';
import Reloj from './Reloj'; 
import './Practica16css';

const zonasHorarias = [
    { nombre: 'Londres', zona: 'Europe/London' },
    { nombre: 'Madrid', zona: 'Europe/Madrid' },
    { nombre: 'Nueva York', zona: 'America/New_York' },
    { nombre: 'Tokio', zona: 'Asia/Tokyo' },
    { nombre: 'Sídney', zona: 'Australia/Sydney' },
  ];

const Practica16 = () => {
  return (
    <div className="relojes-container">
      {zonasHorarias.map((zona, index) => (
        <Reloj key={index} zona={zona.zona} />
      ))}
    </div>
  );
};

export default Practica16;