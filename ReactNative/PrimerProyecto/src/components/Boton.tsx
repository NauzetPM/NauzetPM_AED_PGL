import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  parametro: string,
  setParametro: Function,
  numWidth?: number,
  colorBackgraund?:string,
  colorLetra?:string,
}

const Boton = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.setParametro(props.parametro)}>
      <View style={{...styles.buttonContainer,width:props.numWidth,backgroundColor:props.colorBackgraund}}>
        <Text style={{...styles.buttonText,color:props.colorLetra}}>{props.parametro}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 25,
    paddingHorizontal: 35,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginRight:10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight:"bold",
  },
});
export default Boton