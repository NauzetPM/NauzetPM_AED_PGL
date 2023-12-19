import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Caja from '../components/Caja'
import Circulo from '../components/Circulo'

type Props = {
}
type CirculoProps = {
    nombre:string,
    color:string
}
const Practica08 = (props: Props) => {
    const [colorescajas, setColorescajas] = useState<CirculoProps[]>([]);
    const [rojo, setrojo] = useState<number>(0);
    const [verde, setverde] = useState<number>(0);
    const [azul, setazul] = useState<number>(0);
    const [count, setcount] = useState<number>(1);
    function mostrarCajas(){
        return (
            colorescajas.map(colo=> <Circulo color={colo.color} nombre={colo.nombre} />)
        )
    }
    function CrearCaja(event: GestureResponderEvent): void {
        if(rojo+14>=255){
            setrojo(0);
        }else{
            setrojo(rojo+14);
        }
        if(azul+25>=255){
            setazul(0);
        }else{
            setazul(azul+25);
        }
        if(verde+12>=255){
            setverde(0);
        }else{
            setverde(verde+12);
        }
        let newcolor=(rojo+","+verde+","+azul);
        const color:string =`rgb($newcolor)`;
        let nombre="C"+count;
        let newCirculo={color,nombre};
        const newArray=colorescajas;
        newArray.push(newCirculo);
        setcount(count+1);
        setColorescajas(newArray);
    }

  return (
    <View style={{}}>
      <Text>Practica08</Text>
      <Button title="AgregarCaja" onPress={CrearCaja}/>
      <View style={{}}>
        {mostrarCajas()}
      </View>
    </View>
  )
}

export default Practica08

