import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    color?:string
}

const Caja = (props: Props) => {
    const [flexCount, setflexCount] = useState(1);
    
    function disminuir(event: GestureResponderEvent): void {
        setflexCount(flexCount-1);
        
    }

    function aumentar(event: GestureResponderEvent): void {
        setflexCount(flexCount+1);
    }

  return (
    <View style={{...styles.caja,flex:flexCount,backgroundColor:props.color}}>
      <Button title="FLEX -" onPress={disminuir}/>
      <Button title="FLEX +" onPress={aumentar}/>
      <></>
    </View>
  )
}

export default Caja

const styles = StyleSheet.create({
    caja:{
        backgroundColor: "yellow",
        height:100,
        width:100,
        margin:5,
    }
})