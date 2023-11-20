import React, { useState } from 'react'
import usePractica33 from './hooks/usePractica33';

type Props = {}

const Practica33 = (props: Props) => {
    const {buscarPrimos,primosEncontrados } = usePractica33();
  return (
    <div>
      <h3>Encontrar Números Primos</h3>
      <form
        onSubmit={buscarPrimos}
      >
        <label htmlFor="inicio">Primos mayores que:</label>
        <input type="number" name="inicio" id="inicio"/>
        <br />
        <label htmlFor="fin">Primos menores que:</label>
        <input type="number" name="fin" id="fin" />
        <br />
        <button type="submit">Buscar</button>
      </form>
      <h4>Números Primos Encontrados:</h4>
      <ul>
        {primosEncontrados.map((primo, index) => (
          <li key={index}>{primo}</li>
        ))}
      </ul>
    </div>
  );
}
export default Practica33;