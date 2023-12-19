import React, { useEffect, useRef, useState } from 'react'

type Props = {}
type NumeroRef={
  contador:number;
}
const Practica27 = (props: Props) => {
  const inputNumer = useRef<HTMLInputElement>({} as HTMLInputElement);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [prueba, setprueba] = useState(100);
  const numeroRef = useRef({contador:200} as NumeroRef);
  const [continuar, setcontinuar] = useState(true);
  function tick(){
    numeroRef.current.contador--;
    if(numeroRef.current.contador==0){
      clearInterval(intervalRef.current);
      alert("acabo");
    }else{
      setprueba(numeroRef.current.contador);
    }
    
    
  }

  function iniciar() {
    if(continuar){
      const contadorParaAlcanzar=Number(inputNumer.current.value);
      numeroRef.current.contador=contadorParaAlcanzar;
      inputNumer.current.value=""+0;
      intervalRef.current=setInterval(tick,1000);
    }else{
      clearInterval(intervalRef.current);
      setcontinuar(!continuar);
    }

  }

  return ( 
    <>
    <div>Cronometro</div>

    <button onClick={iniciar}>
      {continuar?"iniciar" : "parar"}
    </button>
    <input type="text" ref={inputNumer}/>
    <p>{prueba}</p>
    </>
  )
}

export default Practica27


