import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}
type Producto = {nombre:string,precio:number,stock:number}

const Practica16 = (props: Props) => {
    const array: Producto[]=[
        {nombre:"producto1",precio:5,stock:43},
        {nombre:"producto2",precio:32,stock:123},
        {nombre:"producto3",precio:54,stock:3},
        {nombre:"producto4",precio:87,stock:123},
        {nombre:"producto5",precio:32,stock:43},
        {nombre:"producto6",precio:12,stock:32},

    ];
  return (
    <View style={{flex:1}}>
      <Text>Practica16</Text>
      <FlatList
      data={array}
      renderItem={(p)=>{
        return(
            <View style={{borderWidth:2,margin:2}}>
                <Text>{JSON.stringify(p,null,3)}</Text>
            </View>
        )
      }}
      keyExtractor={(item,index)=> item.nombre+index}
      ListHeaderComponent={()=><Text>Lista de Productos</Text>}
      ItemSeparatorComponent={()=><Text>-----------------------</Text>}
      />
    </View>
  )
}

export default Practica16

const styles = StyleSheet.create({})