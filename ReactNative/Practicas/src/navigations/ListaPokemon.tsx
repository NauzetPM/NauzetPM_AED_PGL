import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ListaPokemonScreen from '../screens/ListaPokemon';
import DetallesPokemonScreen from '../screens/DetallesPokemon';

const Drawer = createDrawerNavigator();

const ListaPokemon = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ListaPokemon"
        component={ListaPokemonScreen}
        options={{title: 'Lista de Pokemon'}}
        
      />
      <Drawer.Screen
        name="DetallesPokemon"
        component={DetallesPokemonScreen}
        options={{title: 'Detalles del Pokemon'}}
      />
    </Drawer.Navigator>
  );
};

export default ListaPokemon;
