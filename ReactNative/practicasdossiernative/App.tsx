import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Practica31Home } from './src/RSS/Practica31Home';
import Practica31List from './src/RSS/Practica31List';
import LoginScreen from './src/Pantallas Proyecto/Login';
import AppNavigator from './src/Pantallas Proyecto/Navigation';




function App(): JSX.Element {

  return (
    <AppNavigator/>
  );
}

export default App;
