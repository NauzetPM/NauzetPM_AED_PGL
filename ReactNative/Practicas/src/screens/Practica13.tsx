import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import prompt from 'react-native-prompt-android'
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {}

const Practica13 = (props: Props) => {
    const [colorpreferido,setcolorpreferido]=useState("green");
  return (
    <View style={{backgroundColor:colorpreferido ,flex:1}}>
    <Button title="cambiar color" onPress={ ()=>
    prompt('Cambiar Color','Cambiar',
    [{text:'Cancel', onPress:()=>console.log('se ha cancelado')},
    {text:'OK',onPress: color=>{console.log('OK nuevo colo: '+color)
    setcolorpreferido(color)}}
    ],
    {
        cancelable:false,
        placeholder:'color'
    }
    )
    }/>
    <Icon name='car-outline' size={50} color={"blue"} />
    </View>
  )
}

export default Practica13

const styles = StyleSheet.create({})