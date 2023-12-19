import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Practica14 = (props: Props) => {
    const [activo, setActivo] = useState(false);
    const [borde, setborde] = useState(false);
  return (
    <View style={{borderColor:borde ? "red" : "white",borderWidth: 4,flex:1}}>
      <Text>Practica14</Text>
      <Switch
      trackColor={{false:"brown",true:"orange"}}
      thumbColor={activo ? "pink" : "green"}
      onValueChange={()=>{setActivo(!activo);
        setborde(!borde);}}
      value={activo}
        />
    </View>
  )
}

export default Practica14

const styles = StyleSheet.create({})