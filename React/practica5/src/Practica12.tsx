import React, { useState } from 'react'
 type Props={}
const Practica12 = () => {
    const [mensaje, modificarmensaje] = useState<string>();
  return (

    <div>

      <button onClick={()=>eligeColor("verde")}>verde</button>
      <button onClick={()=>eligeColor("azul")}>azul</button>
    </div>
  )
  function eligeColor(color: string) {
    modificarmensaje("Elegiste el color"+color);
}
}

export default Practica12




