import { combineReducers } from 'redux';
import { loadPokemon } from './reducer';
export default combineReducers({
  pokemonList: loadPokemon
});