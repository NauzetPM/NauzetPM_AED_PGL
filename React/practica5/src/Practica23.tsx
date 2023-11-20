import React, { useEffect, useRef, useState } from "react";
type Props = {
}

const Practica23 = (props: Props) => {
    const inputnombre = useRef<HTMLInputElement>({} as HTMLInputElement);
    const inputapellidos = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divresultado = useRef<HTMLDivElement>({} as HTMLDivElement);
    function concatenar(){
        let htmlinputnombre=inputnombre.current;
        let htmlinputapellido=inputapellidos.current;
        let htmldiv=divresultado.current;
        let concatenado=htmlinputnombre.value+" "+htmlinputapellido.value;
        let numeroLetras=concatenado.length-3;
        htmldiv.innerHTML=concatenado+" numero de letras= "+numeroLetras;
    }
    return (
        <div>
            <h4>Componente Ejemplo useRef</h4>
            <input type="text" ref={inputnombre} />
            <input type="text" ref={inputapellidos} />
            <button onClick={concatenar}>concatenar</button>
            <div ref={divresultado}>
            </div>
        </div>

    )
}
export default Practica23