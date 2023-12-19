import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { PokemonItem } from './ListaPokemon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type Props = NativeStackScreenProps<RootStackParamList, 'DetallesPokemon'>;
const DetallesPokemonScreen: React.FC<Props> = ({ route }) => {
  const { pokemonUrl } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [pokemonUrl]);

  if (!pokemonDetails) {
    return <Text>Cargando detalles...</Text>;
  }

  const { sprites } = pokemonDetails;

  const spriteImages = Object.values(sprites)
    .filter((sprite) => typeof sprite === 'string')
    .map((sprite) => sprite as string);

  return (
    <View>
      <Text>{pokemonDetails.name}</Text>
      <ScrollView horizontal>
        {spriteImages.map((sprite, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 10 }}>
            <Image source={{ uri: sprite }} style={{ width: 100, height: 100 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetallesPokemonScreen;

