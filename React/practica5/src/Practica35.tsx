import React, { useState } from 'react'

type Props = {}

const Practica35 = (props: Props) => {
    const [state, setstate] = useState<number>(0);
    function modificarState(dato: number) { setstate(dato); }
    return (
        <div>
            <h3>Componente Padre</h3>
            <p>Mensaje recibido:<B modificarstatepadre={modificarState} /><A modificarstatepadre={modificarState} /></p>

        </div>
    )
}
interface Iprops {
    modificarstatepadre: Function;
}
export const A = (props: Iprops) => {
    function enviarinfo(event: React.ChangeEvent<HTMLInputElement>) {
        const { modificarstatepadre } = props;
        modificarstatepadre(event.target.value);
    }
    return (
        <div>
            <h2>Componente A</h2>
            <input type="text" id="filtro" onChange={enviarinfo} />
        </div>
    )

}
export const B = (props: Iprops) => {
    function enviarinfo() {
        const { modificarstatepadre } = props;
        modificarstatepadre("pulsado boton en B");
    }
    return (
        <div>
            <h2>Componente B</h2>
            <button onClick={enviarinfo}>modificar padre</button>
        </div>
    )

}

export default Practica35