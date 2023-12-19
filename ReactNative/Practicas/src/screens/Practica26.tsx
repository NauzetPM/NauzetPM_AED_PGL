// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Practica26Context} from '../context/Practica26Context';
import Practica26Home from '../hooks/Practica26Home';
import Gato from '../hooks/Gato';
import Perro from '../hooks/Perro';
import DrawerPractica26 from '../navigations/DrawerPractica26';

const Drawer = createDrawerNavigator();

const Practica26 = () => {
  return (
    <Practica26Context>
      <NavigationContainer>
        <DrawerPractica26 />
      </NavigationContainer>
    </Practica26Context>
  );
};

export default Practica26;
