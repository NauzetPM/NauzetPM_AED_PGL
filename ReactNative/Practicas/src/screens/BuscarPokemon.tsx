import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { PokemonItem } from './ListaPokemon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'BuscarPokemonScreen'>;
const BuscarPokemonScreen:React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<PokemonItem[]>([]);
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    const filteredResults = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const renderItem = ({ item }: { item: PokemonItem }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetallesPokemon', { pokemonUrl: item.url })}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View>
      <TextInput
        placeholder="Buscar Pokemon"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default BuscarPokemonScreen;

