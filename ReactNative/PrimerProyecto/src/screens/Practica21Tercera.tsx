import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
/*
type Props = {
  navigation:any
  route:any,
};*/
type Props = NativeStackScreenProps<RootStackParamList, 'Tercera'>;
const Practica21Tercera = ({navigation, route}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tercera screen---------</Text>
        <Text>Nombre recibido:{route.params.nombre}</Text>
        <Button
          title="cambiar a primera"
          onPress={() => navigation.navigate('Primera', {nombre: 'Aquilino'})}
        />
        <Button
          title="cambiar a segunda"
          onPress={() => navigation.navigate('Segunda')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Practica21Tercera;

const styles = StyleSheet.create({});
