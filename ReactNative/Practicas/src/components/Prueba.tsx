import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Prueba = (props: Props) => {
  return (
    <View>
      <Text>Prueba</Text>
    </View>
  )
}

export default Prueba

const styles = StyleSheet.create({
    contenedorCircular:{
        backgroundColor:"rgba(191, 186, 221, 0.54)",
    }
})