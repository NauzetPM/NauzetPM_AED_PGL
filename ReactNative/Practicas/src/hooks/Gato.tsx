import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {animalProps, useAppContext} from '../context/Practica26Context';

type Props = {};

const Gato = (props: Props) => {
  const {animal} = useAppContext();
  const [gatos, setGatos] = useState<animalProps[]>([]);

  useEffect(() => {
    const gatosArray = animal.filter(a => a.especie === 'Gato');
    setGatos(gatosArray);
  }, []);

  return (
    <View>
      {gatos.map(gato => (
        <View key={gato.id}>
          <Text>{gato.nombre}</Text>
          <Image
            source={{
              uri: gato.foto,
            }}
            style={{width: 50, height: 50}}
          />
        </View>
      ))}
    </View>
  );
};

export default Gato;

const styles = StyleSheet.create({});
