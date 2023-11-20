import React,{useEffect,useState} from "react";
type Props={
    zona?: string;
}
const Practica22=(props:Props)=>{
    const [fechaactual , setfecha]=useState<string>("");
    
    useEffect(()=>{
        const timerID=setInterval(
            tick,
            1000
        );
    },[])

    function tick() {
        let zona=props.zona?? "Europe/London";
        const fecha = new Date().toLocaleString( "es-ES",{timeZone: zona });
        setfecha(fecha);
    }
    return(
        <div>
            <h3>Ejemplo reloj Dinamico</h3>
            {fechaactual}
        </div>

    )
}
export default Practica22