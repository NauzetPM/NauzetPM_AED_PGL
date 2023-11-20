/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Practica04 from './src/screens/Practica04';
import Practica08 from './src/screens/Practica08';
import Practica09 from './src/screens/Practica09';
import Calculadora from './src/screens/Calculadora';
import Practica12 from './src/screens/Practica12';
import Practica13 from './src/screens/Practica13';
import Practica15 from './src/screens/Practica15';
import Adicional from './src/screens/Adicional';
import Practica14 from './src/screens/Practica14';
import Practica16 from './src/screens/Practica16';
import Practica18 from './src/screens/Practica18';
import Practica19 from './src/screens/Practica19';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Practica21Primera from './src/screens/Practica21Primera';
import Practica21Segunda from './src/screens/Practica21Segunda';
import Practica21Tercera from './src/screens/Practica21Tercera';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
export type RootStackParamList={
  Perros:undefined;
  Gatos:undefined;
  Dog:undefined;
  Cat:{nombre:string};
  Tercera:{nombre:string};
  Primera: {nombre:string};
  Segunda:undefined;

}
//Practica 20
function HomeScreen(){
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack=createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return(    
  <NavigationContainer>
    <Stack.Navigator>
    {/* se ponen todas las screen que queramos el navigation */}
    <Stack.Screen name="Primera" component={Practica21Primera} />
    <Stack.Screen name="Segunda" component={Practica21Segunda} />
    <Stack.Screen name="Tercera" component={Practica21Tercera} />
    </Stack.Navigator>
</NavigationContainer>

    );
}

/*const [contador,setcontador]=useState(0);
  return (
    <View style={{
      flex:1,
      borderWidth:3,
      borderColor:"black",
      backgroundColor:"lightgray",
      margin:1
    }}>
      <Text>ejercicio basico. Contador:{contador}</Text>
      <Button title="pulsame" onPress={()=>setcontador(contador+1)}></Button>
    </View>*/
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
