import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAppContext } from '../context/Practica23Context';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Practica23_1'>;
const Practica23_1 = ({ navigation, route }: Props) => {
  const { tareas, settareas } = useAppContext();
  function borrar(id: number): void {
    let newtareas: any = [];
    if (tareas.length > 0) {
      tareas.forEach(tarea => {
        if (tarea.id != id) {
          newtareas.push(tarea);
        }
      });
      settareas(newtareas);
    }
  }
  function agregar(): void {



    let newid = 0;
    if (tareas) {
      if (tareas.length > 0) {
        tareas.forEach(tarea => {
          if (tarea.id > newid) {
            newid = tarea.id;
          }
        });
      } else {
        newid = 1;
      }
    } else {
      newid = 1;

    }
    settareas([...tareas, { id: newid, activa: true, titulo: '', contenido: '' }]);
    navigation.navigate('Practica23_2', { id: newid });
  }
  return (
    <View>
      {
        tareas === undefined ? (
          <Text>No tienes tareas.</Text>
        ) : (
          <View>
            {tareas.map((tarea) => (
              <View>
                {tarea.titulo}
                <View>
                  <Link to={`/editar`}>
                    <Icon name="pencil" size={30} color="blue"></Icon>
                  </Link>
                  <TouchableOpacity onPress={() => borrar(tarea.id)}>
                    <Icon name="trash" size={30} color="blue"></Icon>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )
      }
      <TouchableOpacity onPress={() => agregar()}>
        <Icon name="add-circle" size={30} color="blue"></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default Practica23_1;

const styles = StyleSheet.create({});
