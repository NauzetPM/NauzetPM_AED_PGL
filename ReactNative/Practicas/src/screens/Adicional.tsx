import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SwitchLabel from '../components/SwitchLabel'
import adicional from '../hooks/adicional'

type Props = {}

const Adicional = (props: Props) => {
    const {formdata,fillFormData}=adicional();
    const[jubilado,setJubilado]=useState(false);
  return (
    <View style={{flex:1}}>
        <SwitchLabel nombre={"jubilado"} setData={setJubilado}/>
        <SwitchLabel nombre={"casado"} setData={setJubilado}/>
    </View>
  )
}
/*      <TextInput placeholder='nombre' onChangeText={(texto)=>fillFormData(texto,"nombre")}/>
      <TextInput placeholder='edad' onChangeText={(texto)=>fillFormData(texto,"edad")}/>
        <Text>{JSON.stringify(formdata)}</Text>
*/ 
export default Adicional
