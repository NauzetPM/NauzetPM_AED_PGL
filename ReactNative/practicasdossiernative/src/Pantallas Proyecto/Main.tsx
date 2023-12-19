import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';

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
 const renderItem = ({ item }: { item: { id: string; title: string } }) => <Item title={item.title} />;


 const navigateToProfile = () => {
  navigation.navigate('Perfil');
    // Redirige al perfil del usuario
 };

 const renderNavBar = () => (
    <SafeAreaView style={styles.navBar}>
      <TouchableOpacity onPress={navigateToProfile}>
        <Text style={styles.navBarText}>Perfil</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity>
        <Text style={styles.navBarText}>{'>'}</Text>
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