import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaPokemon from '../navigations/ListaPokemon';
import BuscarPokemon from '../navigations/BuscarPokemon';
const Tab = createBottomTabNavigator();
const Practica28 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={ListaPokemon} />
        <Tab.Screen name="Buscar" component={BuscarPokemon} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Practica28;
