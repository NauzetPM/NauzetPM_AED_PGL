import React, { useState } from 'react'
import Practica9 from './Practica9'
type Props = {}

const Practica14 = () => { 
    let arr:Array<number>=[2,3,4,5,6,7,8,9,10];
    const mensajeTabla="tabla del = ";

    return (
        <div>
          <h1>Tablas del 2 al 10</h1>
            {arr.map((tabla, index) => (
                <><h3>tabla del {tabla}</h3>
                <Practica9 TablaDel={tabla} />
                
                </>
            ))}
        </div>
      )
}

export default Practica14