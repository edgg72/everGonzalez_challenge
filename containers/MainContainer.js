import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Input from '../components/Input';
import PokemonList from '../components/PokemonList';
import PokemonContext from '../context/Pokemon/PokemonContext';
import SinglePokemon from '../components/SinglePokemon';

const MainContainer = () => {
  const { selectedPokemon } = useContext(PokemonContext)
  return (
    <>
      {selectedPokemon ? (<SinglePokemon />) : (
        <>
          <Input />
          <PokemonList />
        </>
      )}
    </>
  )
}

export default MainContainer