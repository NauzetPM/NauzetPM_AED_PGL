import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import usePractica12 from '../hooks/usePractica12'

type Props = {}

const Practica12 = (props: Props) => {
    const {colorpreferido,mostrarAlerta}=usePractica12();
    return (
    <View style={{backgroundColor:colorpreferido ,flex:1}}>
      <Text>Practica12</Text>
      <Button title="cambiar color" onPress={mostrarAlerta}></Button>
    </View>
  )
}

export default Practica12
