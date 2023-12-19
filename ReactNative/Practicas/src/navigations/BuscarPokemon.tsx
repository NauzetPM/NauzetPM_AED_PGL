import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetallesPokemonScreen from '../screens/DetallesPokemon';
import BuscarPokemonScreen from '../screens/BuscarPokemon';

const Drawer = createDrawerNavigator();

const BuscarPokemon = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BuscarPokemon"
        component={BuscarPokemonScreen}
        options={{title: 'Buscar Pokemon'}}
      />
      <Drawer.Screen
        name="DetallesPokemon"
        component={DetallesPokemonScreen}
        options={{title: 'Detalles del Pokemon'}}
      />
    </Drawer.Navigator>
  );
};

export default BuscarPokemon;
