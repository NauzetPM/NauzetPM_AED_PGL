import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const Practica30 = (props: Props) => {
  const [locationData, setLocationData] = useState<any[]>([]); 

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('my-key');
      if (data) {
        const parsedData = JSON.parse(data);
        setLocationData(parsedData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verPosicion = async () => {
    try {
      let ps: PermissionStatus;
      ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (ps !== 'granted') {
        ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }

      if (ps === 'granted') {
        Geolocation.getCurrentPosition(
          async (position) => {
            const { coords, timestamp } = position;

            await storeData({ cords: coords, time: timestamp });

            console.log('Cords:', coords);
            console.log('Time:', timestamp);

            loadDataFromStorage();
          },
          (error) => console.log(error),
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('NO hay permisos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const storeData = async (value: any) => {
    try {

      const existingData = await AsyncStorage.getItem('my-key');
      let newData: any[] = [];

      if (existingData) {
        const parsedData = JSON.parse(existingData);
        newData = [...parsedData];
      }

      newData.push(value);

      await AsyncStorage.setItem('my-key', JSON.stringify(newData));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Text>Practica30</Text>
      <Button title="Permiso GPS" onPress={verPosicion} />
      <FlatList
        data={locationData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Cords: {JSON.stringify(item.cords)}</Text>
            <Text>Time: {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Practica30;

const styles = StyleSheet.create({});
