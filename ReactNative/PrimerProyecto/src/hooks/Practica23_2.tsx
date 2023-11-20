import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Practica23_2 = (props: Props) => {
  return (
    <View>
    <Switch
      onValueChange={()=>fillFormData(!formdata.jubilado,"jubilado")}
      value={formdata.jubilado}
      />
      <Text>Practica23_2</Text>
    </View>
  )
}

export default Practica23_2

const styles = StyleSheet.create({})