import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Props = {
    navigation:any
    route:any,
};

const Practica21Primera = ({navigation,route}:Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Primera screen---------</Text>
        <Button
          title="cambiar a tercera"
          onPress={() => navigation.navigate('Tercera', {nombre: 'Aquilino'})}
        />
        <Button
          title="cambiar a segunda"
          onPress={() => navigation.navigate('Segunda')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Practica21Primera;

const styles = StyleSheet.create({});
