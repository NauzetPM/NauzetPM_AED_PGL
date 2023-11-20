import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Caja from '../components/Caja'
import practica04styles from '../themes/Practica4Styles';

type Props = {
}
//Practica 4,5
const Practica04 = (props: Props) => {
  return (
    <View style={practica04styles.principal}>
      <Text>Practica04</Text>
      <View style={{...practica04styles.secundario}}>
      <Caja color="red"/>
      <Caja color="yellow"/>
      <Caja color="blue"/>
      </View>
    </View>
  )
}

export default Practica04

const styles = StyleSheet.create({
    principal:{
      flex: 1,
      margin:5,
      padding:10,
      backgroundColor: "lightblue",
      
    },
    secundario:{
      flex:1,
      borderColor: "black",
      borderWidth:2,
      justifyContent: "center",
    }
})