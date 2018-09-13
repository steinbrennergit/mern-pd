export const loadPokemon = (state = {
  pokemon: []
}, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        pokemon: action.payload
      };
    default:
      return state;
  }
}