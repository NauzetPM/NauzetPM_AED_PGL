import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PERMISSIONS,PermissionStatus, check,request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Button } from 'react-native';
type Props = {}

const Practica29 = (props: Props) => {
    async function verPosicion() {
        let ps:PermissionStatus;
        ps=await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if(ps!='granted'){
            ps=await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        if(ps=='granted'){
            Geolocation.getCurrentPosition(info=>console.log(info));
        }else{
            console.log("NO hay permisos")
        }
    }
  return (
    <View>
      <Text>Practica29</Text>
      <Button title="permiso gps" onPress={verPosicion}/>
    </View>
  )
}

export default Practica29

const styles = StyleSheet.create({})