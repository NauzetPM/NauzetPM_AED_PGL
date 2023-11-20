import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    nombre:string,
    color:string
}

const Circulo= (props: Props) => {
    const [flexCount, setflexCount] = useState(1);
    

  return (
    <View style={{...styles.caja,flex:flexCount,backgroundColor:props.color}}>
      <Text>{props.nombre}</Text>
    </View>
  )
}

export default Circulo

const styles = StyleSheet.create({
    caja:{
        backgroundColor: "yellow",
        borderColor: "black",
        borderRadius:50,
        height:100,
        width:100,
        margin:5,
    }
})