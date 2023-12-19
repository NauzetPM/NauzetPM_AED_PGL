import React, { useState, useEffect } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../context/Practica23Context';
import { TareaProps } from '../components/Tarea';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Practica23_2'>;

const Practica23_2 = ({ navigation, route }: Props) => {
  
  const { tareas, settareas } = useAppContext();
  const [tareaState, settarea] = useState<TareaProps>({
      id: -1, activa: true, titulo: '', contenido: '',

  });

  useEffect(() => {
    const idTarea = route.params.id;
    const foundTask = tareas.find(tarea => tarea.id === idTarea);
    
    if (foundTask) {
      settarea(foundTask);
    }
  }, [route.params.id, tareas]);

  function guardar(): void {
    const nuevasTareas = tareas.map(tarea => {
      if (tarea.id === tareaState.id) {
        return tareaState;
      }
      return tarea;
    });
    settareas(nuevasTareas);
    navigation.navigate('Practica23_1'); 
  }

  return (
    <View>
      <Switch
        onValueChange={() => settarea({ ...tareaState, activa: !tareaState.activa })}
        value={tareaState?.activa}
      />
      <Text>Titulo</Text>
      <TextInput
        value={tareaState?.titulo}
        onChangeText={(text) => settarea({ ...tareaState, titulo: text })}
      />
      <Text>Contenido</Text>
      <TextInput
        value={tareaState?.contenido}
        onChangeText={(text) => settarea({ ...tareaState, contenido: text })}
      />
      <TouchableOpacity onPress={guardar}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
  

};

export default Practica23_2;

const styles = StyleSheet.create({});
