import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../context/Practica23Context';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import { TareaProps } from '../components/Tarea';

type Props = NativeStackScreenProps<RootStackParamList, 'Practica23_1'>;

const Practica23_1 = ({navigation, route}: Props) => {
  const {tareas, settareas} = useAppContext();
  const [newid, setNewId] = useState<number | null>(null);

  function borrar(id: number): void {
    let newtareas: any = [];
    if (tareas.length > 0) {
      tareas.forEach(tarea => {
        if (tarea.id !== id) {
          newtareas.push(tarea);
        }
      });
      settareas(newtareas);
    }
  }

  function agregar(): void {
    let newId = 0;
    if (tareas && tareas.length > 0) {
      newId = Math.max(...tareas.map(tarea => tarea.id)) + 1;
    } else {
      newId = 1;
    }
    setNewId(newId);
  }

  function editar(id: number): void {
    const tareaToEdit = tareas.find(tarea => tarea.id === id);
    if (tareaToEdit) {
      navigation.navigate('Practica23_2', {id, tarea: tareaToEdit});
    }
  }

  useEffect(() => {
    if (newid !== null) {
      settareas([
        ...tareas,
        {id: newid, contenido: '', titulo: '', activa: true},
      ]);
      navigation.navigate('Practica23_2', {id: newid});
    }
  }, [newid, navigation]);

  function editarActiva(tarea: TareaProps): void {
    const updatedTarea = { ...tarea, activa: !tarea.activa };
    const tareaIndex = tareas.findIndex(t => t.id === tarea.id);
    const newTareas = [...tareas];
    newTareas[tareaIndex] = updatedTarea;
    settareas(newTareas);
  }

  return (
    <View>
      <View>
        {tareas.map(tarea => (
          <View key={tarea.id}>
            <View style={{flexDirection: 'row'}}>
              {tarea.activa ? (
                <TouchableOpacity onPress={() => editarActiva(tarea)}>
                  <Icon name="checkbox-outline" size={20} color={'blue'} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => editarActiva(tarea)}>
                  <Icon name="square-outline" size={20} color={'green'} />
                </TouchableOpacity>
              )}
              <Text style={tarea.activa ? styles.activa : styles.inactiva}>
                {tarea.titulo}
              </Text>
              <TouchableOpacity onPress={() => editar(tarea.id)}>
                <Icon name="pencil" size={20} color={'blue'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => borrar(tarea.id)}>
                <Icon name="trash-bin" size={20} color={'blue'} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => {
          agregar();
        }}>
        <Icon name="add-circle" size={50} color={'blue'} />
      </TouchableOpacity>
    </View>
  );
};

export default Practica23_1;

const styles = StyleSheet.create({
  activa: {},
  inactiva: {
    textDecorationLine: 'line-through',
  },
});
