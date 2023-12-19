import React, { useState } from 'react'

const PracticaAdicional = () => {
  const [arrayLetras, modificarArrayLetras] = useState(["a", "e", "i", "o", "u"]);

  return (
    <div>
      {

        arrayLetras.map((m) => {
          return (
            <li> {m} </li>
          );
        })
      }


    </div>
  )
}

export default PracticaAdicional
