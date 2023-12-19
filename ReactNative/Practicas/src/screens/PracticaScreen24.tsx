import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Practica24 from '../hooks/Practica24';

type Props = {};

const PracticaScreen24 = (props: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Practica24" component={Practica24} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PracticaScreen24;

const styles = StyleSheet.create({});

