import React, { useEffect, useRef, useState } from 'react'

type Props = {}
const inputtexto = useRef<HTMLInputElement>({} as HTMLInputElement);
const divtexto = useRef<HTMLDivElement>({} as HTMLDivElement);
const Practica28 = (props: Props) => {
    useEffect(()=>{
        const timerID=setInterval(
            escribir,
            1000
        );
    },[])
    function escribir(): void {
        let htmlinputtexto=inputtexto.current;
        let texto=htmlinputtexto.value;
        let htmldivtexto=divtexto.current;
        htmldivtexto.innerHTML=texto;
    }

  return (
    <>
    <input type="text" ref={inputtexto} />
    <div ref={divtexto}></div>
    </>
  )
}

export default Practica28