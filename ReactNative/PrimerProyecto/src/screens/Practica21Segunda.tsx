import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Props = {
  navigation:any
  route:any,
};

const Practica21Segunda = ({navigation,route}:Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Segunda screen---------</Text>
        <Button
          title="cambiar a tercera"
          onPress={() => navigation.navigate('Tercera', {nombre: 'Aquilino'})}
        />
        <Button
          title="cambiar a Primera"
          onPress={() => navigation.navigate('Primera')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Practica21Segunda;

const styles = StyleSheet.create({});
