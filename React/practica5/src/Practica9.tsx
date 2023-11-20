import React, { useState } from 'react'
type Props={
  TablaDel:number;
}
const Practica9 = (props:Props) => {
  const [contador, incrementar] = useState(1);
  const TablaDel=props.TablaDel;
  function calculartabla(){
      incrementar(contador + 1);
      if (contador > 9) {
        incrementar(1);
      }
  }

  return (
    <div>
      <p>{TablaDel}*{contador}={TablaDel * contador} </p>
      <button onClick={calculartabla}>Pulsar</button>
    </div>
  )
}

export default Practica9
