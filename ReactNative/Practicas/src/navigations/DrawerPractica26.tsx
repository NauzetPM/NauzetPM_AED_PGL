import React from 'react';
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import Gato from '../hooks/Gato';
import Perro from '../hooks/Perro';
import Practica26Home from '../hooks/Practica26Home';
import { Image, View } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerPractica26 = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props)=>drawerPersonalizado(props)}
    >
      <Drawer.Screen name="Home" component={Practica26Home} />
      <Drawer.Screen name="Gato" component={Gato} />
      <Drawer.Screen name="Perro" component={Perro} />
    </Drawer.Navigator>
  );
};
function drawerPersonalizado(props:DrawerContentComponentProps){
  return(
    <DrawerContentScrollView>
      <View>
      <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2IdFnvYYOaC-9xwutgzND3LxZlwiRBgLaA&usqp=CAU",
              }}
            style={{width: 50, height: 50}}
          />
      </View>
      <DrawerItem
      label="Home"
      onPress={()=>props.navigation.navigate("Home")}
      />
      <DrawerItem
      label="Gato"
      onPress={()=>props.navigation.navigate("Gato")}
      />
      <DrawerItem
      label="Perro"
      onPress={()=>props.navigation.navigate("Perro")}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerPractica26;
