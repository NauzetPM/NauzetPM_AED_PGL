import React, { useState } from 'react'
 type Props={}
const Practica12_5 = () => {
    const [mensaje, modificarmensaje] = useState<string>();
    const [contarAzul, sumarAzul] = useState<number>(0);
    const [contarVerde, sumarVerde] = useState<number>(0);
  return (

    <div>
        <p>{mensaje}</p>
        <p>Verde {contarVerde}</p>
      <button onClick={()=>eligeColor("verde")}>verde</button>
      <p>Azul {contarAzul}</p>
      <button onClick={()=>eligeColor("azul")}>azul</button>
      <br/>
      <button onClick={resetContador}>Reset contador</button>
      
    </div>
  )
  function eligeColor(color: string) {
    modificarmensaje("Elegiste el color "+color);
    if(color=="verde"){
        sumarVerde(contarVerde+1);
    }else{
        sumarAzul(contarAzul+1);
    }
}
function resetContador() {
    sumarAzul(0);
    sumarVerde(0);
}
}

export default Practica12_5