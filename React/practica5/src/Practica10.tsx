import React, { useState } from 'react'

const Practica10 = () => {
  const random = Math.trunc(Math.random() * 101);
  const [arraystay, agregar] = useState([random]);
  return (
    <div>
      {JSON.stringify(arraystay)}
      <button onClick={() => {
        agregar(arrayNuevo => [...arrayNuevo, Math.trunc(Math.random() * 101)]);
      }}>Pulsar</button>
    </div>
  )
}

export default Practica10
