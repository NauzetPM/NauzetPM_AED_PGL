import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard, { PokemonCardProps } from './PokemonCard';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { useAppContext } from './AppPokemonContext';

const PokemonCardList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonCardProps[]>([]);
  
  function Navbar() {
    return (
    <nav>
    <Link to="/"> Inicio </Link> &nbsp;
    <Link to="/pokemon/id"> </Link>
    </nav>
    );
    }
    
  useEffect(() => {
    async function rellenarPokemonData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=60');
        const results = response.data.results;
        const dataPromises = results.map(async (result: any) => {
          const pokemonResponse = await axios.get(result.url);
          return {
            name: pokemonResponse.data.name,
            image1: pokemonResponse.data.sprites.front_default,
            image2: pokemonResponse.data.sprites.back_default,
            image3: pokemonResponse.data.sprites.front_shiny,
            weight: pokemonResponse.data.weight,
            height: pokemonResponse.data.height,
          };
        });
        const pokemonData = await Promise.all(dataPromises);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error data:', error);
      }
    }

    rellenarPokemonData();
  }, []);

  return (
    <div className="PokemonListCard">
    {pokemonList.map((pokemon: any, index: number) => (
        <div>
        <PokemonCard
          key={index}
          name={pokemon.name}
          image1={pokemon.image1}
          image2={pokemon.image2}
          image3={pokemon.image3}
          weight={pokemon.weight}
          height={pokemon.height}
        />
        
      </div>
      ))}
    </div>
  );
};

export default PokemonCardList;
