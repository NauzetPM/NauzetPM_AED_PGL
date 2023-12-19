import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { animalProps, useAppContext } from '../context/Practica26Context';

type Props = {};

const Perro = (props: Props) => {
  const { animal } = useAppContext();
  const [perros, setPerros] = useState<animalProps[]>([]);

  useEffect(() => {
    const perrosArray = animal.filter((a) => a.especie === 'Perro');
    setPerros(perrosArray);
  }, []);

  return (
    <View>
      {perros.map((perro) => (
        <View key={perro.id}>
          <Text>{perro.nombre}</Text>
          <Image
            source={{
              uri: perro.foto,
            }}
            style={{width: 50, height: 50}}
          />
        </View>
      ))}
    </View>
  );
};

export default Perro;

const styles = StyleSheet.create({});
