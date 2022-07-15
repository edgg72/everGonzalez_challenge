import { GET_POKEMON, NEXT_PAGE, PREVIOUS_PAGE, SEARCH_REQUEST } from "../types";

export default function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemonList: payload
      }
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case SEARCH_REQUEST:
      console.log(payload)
      return {
        ...state,
        selectedPokemon: payload
      }
    default:
      return state;
  }
}