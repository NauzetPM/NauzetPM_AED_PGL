import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Button,
 SafeAreaView,
 FlatList,
 Image,
 TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
 {
    id: '1',
    title: 'Info 1',
 },
 {
    id: '2',
    title: 'Info 2',
 },
];

interface ItemProps {
    title: string;
  }
const Item: React.FC<ItemProps> = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }: { item: { id: string; title: string } }) => <Item title={item.title} />;

const Perfil = ({navigation}) => {
 const navigateBack = () => {
   navigation.goBack();
 };

 const handleLogout = () => {
   navigation.navigate('LoginScreen');
    // Acción para cerrar sesión
 };

 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="settings-outline" size={24} color="black" />
      </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.info}>Información del usuario</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
      
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
 },
 info: {
    alignSelf: 'center',
    marginBottom: 20,
 },
 menu: {
    alignSelf: 'flex-end',
    marginTop: 10,
 },
 item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
 },
 title: {
    fontSize: 32,
 },
 header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default Perfil;