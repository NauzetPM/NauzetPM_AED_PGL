import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';

export type PokemonItem = {
  name: string;
  url: string;
  // Add other properties as needed
};

type Props = NativeStackScreenProps<RootStackParamList, 'ListaPokemonScreen'>;

const ListaPokemonScreen: React.FC<Props> = ({ navigation }: Props) => {
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

  const renderItem = ({ item }: { item: PokemonItem }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetallesPokemon', { pokemonUrl: item.url })}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default ListaPokemonScreen;
