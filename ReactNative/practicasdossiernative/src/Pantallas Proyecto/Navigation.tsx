import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './Register';
import LoginScreen from './Login';
import Main from './Main';
import Perfil from './Perfil';
import SettingsScreen from './Ajustes';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false, // Esta línea oculta la barra de navegación predeterminada en todas las pantallas
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
 );
};

export default AppNavigator;