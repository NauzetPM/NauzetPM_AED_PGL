import React from 'react'
type Props={
 zona?:string
}

const Reloj = (props:Props) => {
    let zona=props.zona?? "Europe/London";
    const fecha = new Date().toLocaleString( "es-ES",{timeZone: zona });
  return (
    <>
    <h5>props recibidos: {zona}</h5>
    <h4>{fecha}</h4>
    </>
  )
}

export default Reloj
