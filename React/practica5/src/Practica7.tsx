import React from 'react'

const Practica7 = () => {
    let contador=0;
    const mostrarHora=()=>{
        //alert(new Date());
        contador++
    }
  return (
    <div>
        <h1>La hora es:</h1>
      <button onClick={mostrarHora}>Pulsar</button>
      <p>{contador}</p>
    </div>
  )
}

export default Practica7
