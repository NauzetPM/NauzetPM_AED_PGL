import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import useCalculadora from '../hooks/useCalculadora';
import Boton from '../components/Boton';


export default function Calculadora() {
  const {result,firstNumber,secondNumber,operation,handleNumberPress,handleOperationPress,getResult,clear}=useCalculadora();
  const mostrarNumero = () => {
    if (result !== null) {
      return (
        <Text style={styles.texto} adjustsFontSizeToFit={true} numberOfLines={1}>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber === "") {
      return <Text style={styles.texto} >{"0"}</Text>;
    }
    return <Text style={styles.texto} adjustsFontSizeToFit={true} numberOfLines={1}>{firstNumber}</Text>;
  };

  return (
    <View style={styles.calculadoraContainer}>
      <View style={{height:160}}>
        <Text style={styles.texto} adjustsFontSizeToFit={true} numberOfLines={1}>
          {secondNumber}
            {operation}
        </Text>
        {mostrarNumero()}
      </View>
      <View style={styles.botonContainer}>
      <Boton colorBackgraund='lightgrey' colorLetra='black' parametro='AC' setParametro={clear}/>
      <Boton colorBackgraund='lightgrey' colorLetra='black' parametro='+-' setParametro={handleOperationPress}/>
      <Boton colorBackgraund='lightgrey' colorLetra='black' parametro='%' setParametro={handleOperationPress}/>
      <Boton colorBackgraund='orange' colorLetra='white' parametro='/' setParametro={handleOperationPress}/>
      </View>
      <View style={styles.botonContainer} >
      <Boton colorBackgraund='grey' colorLetra='white' parametro='7' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='8' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='9' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='orange' colorLetra='white' parametro='*' setParametro={handleOperationPress}/>
      </View>
      <View style={styles.botonContainer}>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='4' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='5' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='6' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='orange' colorLetra='white' parametro='-' setParametro={handleOperationPress}/>
      </View>
      <View style={styles.botonContainer}>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='1' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='2' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='3' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='orange' colorLetra='white' parametro='+' setParametro={handleOperationPress}/>
      </View>
      <View style={styles.botonContainer}>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='0' setParametro={handleNumberPress} numWidth={180}/>
      <Boton colorBackgraund='grey' colorLetra='white' parametro='.' setParametro={handleNumberPress}/>
      <Boton colorBackgraund='orange' colorLetra='white' parametro='=' setParametro={getResult}/>    
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  calculadoraContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor:"black",
  },
  
  botonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginRight: 10,
    marginTop:10,
  },
  texto: {
    color: 'white',
    fontSize: 40,
  },
});