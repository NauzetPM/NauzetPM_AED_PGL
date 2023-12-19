import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Practica24Aboaut from './Practica24Aboaut';
import Practica24StackNavigation from './Practica24StackNavigation';

type Props = {};

const Practica24 = (props: Props) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pantalla1" component={Practica24StackNavigation} />
      <Drawer.Screen name="Pantalla2" component={Practica24Aboaut} />
    </Drawer.Navigator>
  );
};

export default Practica24;

const styles = StyleSheet.create({});
