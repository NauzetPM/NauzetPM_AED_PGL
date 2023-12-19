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
import PracticaScreen24 from './src/screens/PracticaScreen24';
import Practica23 from './src/screens/Practica23';
import Practica26 from './src/screens/Practica26';
import ListaPokemonScreen from './src/screens/ListaPokemon';
import BuscarPokemonScreen from './src/screens/BuscarPokemon';
import Practica28 from './src/screens/Practica28';
import Practica29 from './src/hooks/Practica29';
import Practica30 from './src/hooks/Practica30';
import Practica31 from './src/screens/Practica31';

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
export type RootStackParamList = {
  Perros: undefined;
  Gatos: undefined;
  Dog: undefined;
  Cat: { nombre: string };
  Tercera: { nombre: string };
  Primera: { nombre: string };
  Segunda: undefined;
  Practica23_2: { id: number ,tarea?:any}
  Practica23_1: undefined;
  Calculadora:undefined;
  Practica24:undefined;
  ListaPokemonScreen:undefined;
  DetallesPokemon: { pokemonUrl: string };
  BuscarPokemonScreen:undefined;
}
//Practica 20
function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <Practica31/>
  );
}


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
