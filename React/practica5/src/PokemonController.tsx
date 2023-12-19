import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard, { PokemonCardProps } from './PokemonCard';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { AppPokemonContext, useAppContext } from './AppPokemonContext';
import PokemonFavorito from './pokemonFavorito';

const PokemonController: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonCardProps[]>([]);
  const [nombrePokemonSeleccionado, setnombrePokemonSeleccionado] = useState("")
  const {pokemonfav,setpokemonfav}=useAppContext();
  function Navbar() {

    return (
      <nav>
        <Link to="/">Inicio</Link> &nbsp;
        <div>
          {pokemonList.map((pokemon: any, index: number) => (
            <li>
              <Link
                to={`/pokemon/mostrarPokemon/${pokemon.name}`}
                onClick={() => (setnombrePokemonSeleccionado(pokemon.name))}
              >
                {pokemon.name}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    );
  }
  useEffect(() => {
    async function rellenarPokemonData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
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


    
    const pokemonfavSorege = JSON.parse(localStorage.getItem("fav") || "{}");
    console.log(pokemonfavSorege);
    if (pokemonfavSorege!=null) {
      setpokemonfav({
        ...pokemonfavSorege
      });
    }
    rellenarPokemonData();
  }, []);

  function mostrarInfoPokemon(nombrePokemon: string) {
    let namep: string = "";
    let image1p: string = "";
    let image2p: string = "";
    let image3p: string = "";
    let weightp: string = "";
    let heightp: string = "";
    pokemonList.forEach(pokemon => {
      if (nombrePokemon == pokemon.name) {
        namep = pokemon.name;
        image1p = pokemon.image1;
        image2p = pokemon.image2;
        image3p = pokemon.image3;
        weightp = pokemon.weight;
        heightp = pokemon.height;
      }
    });
    return (
      <div>
        <PokemonCard
          name={namep}
          image1={image1p}
          image2={image2p}
          image3={image3p}
          weight={weightp}
          height={heightp}
        />
      </div>
    );


  }
  return (
    <BrowserRouter>
      <AppPokemonContext>
        <PokemonFavorito />
        <Navbar />
        <Routes>
          <Route path="/pokemon/mostrarPokemon/:pokemon" element={mostrarInfoPokemon(nombrePokemonSeleccionado)} />
        </Routes>

      </AppPokemonContext>
    </BrowserRouter>
  );
}

export default PokemonController;
