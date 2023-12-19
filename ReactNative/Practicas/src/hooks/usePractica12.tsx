import React, { useState } from 'react'
import { Alert } from 'react-native';



const usePractica12 = () => {
    const [colorpreferido,setcolorpreferido]=useState("green");
    const colores=["green","red","blue","yellow","lightgreen","lightred","lightblue","lightyellow"]
    const [newcolor,setnewcolor]=useState("green");
    function nuevoColor() {
        let red=Math.trunc(Math.random()*255);
        let blue=Math.trunc(Math.random()*255);
        let green=Math.trunc(Math.random()*255);
        let color=`rgb(${red},${green},${blue})`;
        setnewcolor(color)
        
    }
    function mostrarAlerta() {
        //setnewcolor(colores[Math.trunc(Math.random()*colores.length)]);
        nuevoColor();
        Alert.alert('cambio de color',`Si acepta cambiara el color` ,[
            {text:'Cancel',
            onPress: ()=>console.log('No se cambio de color')
        },{text:'OK',onPress: ()=>setcolorpreferido(newcolor)}
        ])
    }
    return{
        colorpreferido,
        mostrarAlerta
    }
}
export default usePractica12