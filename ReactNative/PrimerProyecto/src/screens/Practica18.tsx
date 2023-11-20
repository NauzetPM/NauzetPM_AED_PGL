import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type entrada = {
  texto: string;
  fecha: string;
};

const Practica18 = () => {

  const [texto, setTexto] = useState('');
  const [entradas, setEntradas] = useState<entrada[]>([]);

  const agregarEntrada = () => {
    const fecha = obtenerFechaConSegundos();

    const nuevaEntrada = {
      texto: `${texto} `,
      fecha: fecha,
    };

    setEntradas([...entradas, nuevaEntrada]);
  };

  const obtenerFechaConSegundos = () => {
    const fecha = new Date();
    return `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
  };

  const obtenerEmoticon = (texto: string) => {
    if (texto.includes(':)')) {
      return <Icon name="happy-outline" size={20} color="blue" />;
    } else if (texto.includes(':(')) {
      return <Icon name="sad-outline" size={20} color="blue" />;
    } else {
      return null;
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Diario</Text>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Escribe tu entrada aquí"
        value={texto}
        onChangeText={(value) => setTexto(value)}
      />
      <Button title="Agregar Entrada" onPress={agregarEntrada} />
      <View style={{ marginTop: 20 }}>
        {entradas.map((entrada, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {obtenerEmoticon(entrada.texto)}
              <Text>{entrada.texto.replace(/:\)|:\(/g, '').trim()}</Text>
            </View>
            <Text>{entrada.fecha}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Practica18;
