import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Avatar, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
const DATA = [
 { id: '1', title: 'Elemento 1' },
 { id: '2', title: 'Elemento 2' },
 { id: '3', title: 'Elemento 3' },
 { id: '4', title: 'Elemento 4' },
 { id: '5', title: 'Elemento 5' },
];
interface ItemProps {
    title: string;
  }
const Item: React.FC<ItemProps> = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Main = ({navigation}) => {
 const [searchText, setSearchText] = React.useState('');
 const renderItem = ({ item }: { item: { id: string; title: string } }) => 
 <Card>
 <Card.Title>Nombre Producto</Card.Title>
 <Card.Divider />
 <Card.Image
   style={{ padding: 0 }}
   source={{
     uri:
       'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
   }}
 />
 <Text style={{ marginBottom: 10 }}>
   Descripcion Producto
 </Text>
 <Button
   buttonStyle={{
     borderRadius: 0,
     marginLeft: 0,
     marginRight: 0,
     marginBottom: 0,
   }}
   title="VER"
 />
</Card>
          ;


 const navigateToProfile = () => {
  navigation.navigate('Perfil');
    // Redirige al perfil del usuario
 };

 const renderNavBar = () => (
    <SafeAreaView style={styles.navBar}>
      <TouchableOpacity onPress={navigateToProfile}>

    <Avatar
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="medium"
      source={{
        uri:
          "https://randomuser.me/api/portraits/men/36.jpg"
      }}
      title="P"
      titleStyle={{}}
    />


      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity>
      <Icon name="search-outline" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
 );

 return (
    <View style={styles.container}>
      {renderNavBar()}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
 },
 navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
 },
 navBarText: {
    fontSize: 16,
 },
 searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
 },
 item: {
    padding: 10,
    marginVertical: 8,
 },
 title: {
    fontSize: 16,
 },
});

export default Main;