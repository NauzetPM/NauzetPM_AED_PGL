import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Practica23Context} from '../context/Practica23Context';
import Practica23_1 from '../hooks/Practica23_1';
import {NavigationContainer} from '@react-navigation/native';
import Practica23_2 from '../hooks/Practica23_2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = {};

const Practica23 = (props: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Practica23Context>
        <Stack.Navigator>
          <Stack.Screen name="Practica23_1" component={Practica23_1} />
          <Stack.Screen name="Practica23_2" component={Practica23_2} />
        </Stack.Navigator>
      </Practica23Context>
    </NavigationContainer>
  );
};

export default Practica23;

const styles = StyleSheet.create({});
