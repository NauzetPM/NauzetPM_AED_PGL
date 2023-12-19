import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";
import Practica23_1 from "./Practica23_1";
import Practica23_2 from "./Practica23_2";
import Calculadora from "../screens/Calculadora";

type Props = {};

const Practica24StackNavigation = (props: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (

        <Stack.Navigator>
          {/* se ponen todas las screen que queramos el navigation */}
          <Stack.Screen name="Calculadora" component={Calculadora} />
        </Stack.Navigator>

  );
};

export default Practica24StackNavigation;

const styles = StyleSheet.create({});