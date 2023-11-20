import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../context/Practica23Context';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {
  navigation:any
};

const Practica23 = ({navigation}: Props) => {
  const {tareas, settareas} = useAppContext();
  function borrar(id: number): void {
    let newtareas:any=[];
    if(tareas.length>0){
      tareas.forEach(tarea => {
        if(tarea.id!=id){
          newtareas.push(tarea);
        }
      });  
      settareas(newtareas);  
    }
  }
  function agregar(): void {
    let newid=0;
    if(tareas.length>0){
      tareas.forEach(tarea => {
        if(tarea.id>newid){
          newid=tarea.id;
        }
      });    
    }else{
      newid=1;
    }

    settareas([...tareas,{id:newid,activa:true,titulo:'',contenido:''}]);
    navigation.navigate('Practica23_2');
  }
  return (
    <View>
      {tareas.map(tarea => (
        <li>
          {tarea.titulo}
          <div>
            <Link to={`/editar`}>
              <Icon name="pencil" size={30} color="blue"></Icon>
            </Link>
            <TouchableOpacity onPress={() => borrar(tarea.id)}>
              <Icon name="trash" size={30} color="blue"></Icon>
            </TouchableOpacity>
          </div>
        </li>
      ))}
      <TouchableOpacity onPress={() => agregar()}>
        <Icon name="add-circle" size={30} color="blue"></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default Practica23;

const styles = StyleSheet.create({});
