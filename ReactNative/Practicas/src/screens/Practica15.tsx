import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import usePractica15 from '../hooks/usePractica15'

type Props = {}

const Practica15 = (props: Props) => {
    const {formdata,fillFormData}=usePractica15();
  return (
    <View style={{flex:1}}>
      <Text>Practica15</Text>
      <View style={{flexDirection:"row"}}>
        <Text>Jubilado</Text>
      <Switch
      onValueChange={()=>fillFormData(!formdata.jubilado,"jubilado")}
      value={formdata.jubilado}
      />
      </View>
      <View style={{flexDirection:"row"}}>
        <Text>Casado</Text>
        <Switch
      onValueChange={()=>fillFormData(!formdata.casado,"casado")}
      value={formdata.casado}
      />
      </View>
      <TextInput placeholder='nombre' onChangeText={(texto)=>fillFormData(texto,"nombre")}/>
      <TextInput placeholder='edad' onChangeText={(texto)=>fillFormData(texto,"edad")}/>
        <Text>{JSON.stringify(formdata)}</Text>
    </View>
  )
}

export default Practica15

const styles = StyleSheet.create({})