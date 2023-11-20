import React, { useRef, useState } from 'react';

const Practica29 = () => {
    const [valor, setValor] = useState(200);
    const handleOperacion = (textoBotonRef:React.MouseEvent<HTMLButtonElement>) => {
        let operacion=textoBotonRef.currentTarget.innerHTML.split(" ");

        if (operacion[1]=="/") {
            setValor(valor / 2);
        } else if (operacion[1]=="*") {
            setValor(valor * 2);
        }


    };

    return (
        <div>
            <h2>Valor Actual: {valor}</h2>
            <button onClick={handleOperacion} >{valor} / 2</button>
            <button onClick={handleOperacion} >{valor} * 2</button>
        </div>
    );
};
export default Practica29;