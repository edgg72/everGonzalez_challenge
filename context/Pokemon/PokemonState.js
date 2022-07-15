import React, { useReducer } from 'react';
import { GET_POKEMON, NEXT_PAGE, PREVIOUS_PAGE, SEARCH_REQUEST } from '../types';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';



const pokeAPIUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonState = props => {
  const initialState = {
    pokemonList: [],
    selectedPokemon: null,
    currentPage: 1
  }

  const [state, dispatch] = useReducer(PokemonReducer, initialState)

  const getPokemons = async () => {
    const f1 = fetch(`${pokeAPIUrl}${state.currentPage}`);
    const f2 = fetch(`${pokeAPIUrl}${state.currentPage + 1}`);
    const f3 = fetch(`${pokeAPIUrl}${state.currentPage + 2}`);
    const f4 = fetch(`${pokeAPIUrl}${state.currentPage + 3}`);

    let res = await Promise.all([f1, f2, f3, f4])
      .then(values => {
        return Promise.all(values.map(r => r.json()));
      })
    dispatch({
      type: GET_POKEMON,
      payload: res
    })
  }
  const nextPage = () => {
    dispatch({
      type: NEXT_PAGE,
      payload: state.currentPage + 4
    })
    console.log(state.currentPage)
  }

  const previousPage = () => {
    dispatch({
      type: PREVIOUS_PAGE,
      payload: state.currentPage - 4
    })
  }

  const searchRequest = async (e) => {
    if (e) {
      const urlBuilder = `${pokeAPIUrl}${e}`
      const result = await fetch(urlBuilder)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        })
        .then(values => { return values })
        .catch(err => {
          console.log('There has been a problem with your fetch operation: ' + err.message);
          throw err;
        });
      dispatch({
        type: SEARCH_REQUEST,
        payload: result
      })
    } else {
      dispatch({
        type: SEARCH_REQUEST,
        payload: e
      })
    }

  }

  return (
    <PokemonContext.Provider value={{
      pokemonList: state.pokemonList,
      selectedPokemon: state.selectedPokemon,
      currentPage: state.currentPage,
      getPokemons,
      nextPage,
      previousPage,
      searchRequest
    }} >
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonState