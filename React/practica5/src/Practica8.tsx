import React, { useState } from "react";
type Props = {}
type Player={
    life: number,
    name: string,
    lvl:number
}
const Practica8 = (props: Props) => {
    const [contador, incrementar] = useState(0);
    const [textoState, modificarTextoState] = useState("Este es mi primer texto");
    const [playerState,setPlayerState]=useState({} as Player);
    return (
        <>
            <p>Has hecho click {contador} veces</p>
            <p> texto {textoState} </p>
            <p>{JSON.stringify(playerState,null,3)}</p>
            <button onClick={() => {
                incrementar(contador + 1);
                modificarTextoState("otro texto: "+Math.random());

                let NuevoStatePlayer: Player={
                        ...playerState,
                        life:Math.random()
                }
                setPlayerState(NuevoStatePlayer);
            }}>
                Haz click!
            </button>
        </>
    );
}
export default Practica8;