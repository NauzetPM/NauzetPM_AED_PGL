import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Practica19 = () => {
  const [texto, setTexto] = useState('');

  const agregarEmote = (emote: string) => {
    setTexto((prevText) => prevText + ` ${emote}`);
  };

  return (
    <View style={{ padding: 20 }}>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => agregarEmote(':)')}>
          <Icon name="happy-outline" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => agregarEmote(':(')}>
          <Icon name="sad-outline" size={30} color="blue" />
        </TouchableOpacity>
      </View>
      <Text>Escribe tu texto:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Escribe aquí"
        value={texto}
        onChangeText={(value) => setTexto(value)}
      />
      <Text>Texto resultante: {texto}</Text>
    </View>
  );
};

export default Practica19;
