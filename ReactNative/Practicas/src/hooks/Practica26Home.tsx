import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppContext } from '../context/Practica26Context';

type Props = {}

const Practica26Home = (props: Props) => {
    const {animal, setanimal} = useAppContext();
  return (
    <View>
       {animal.map(tarea => (
          <View key={tarea.id}>
            <View>
              <Text>
                {tarea.nombre}
              </Text>
            </View>
          </View>
        ))}
    </View>
  )
}

export default Practica26Home

const styles = StyleSheet.create({})