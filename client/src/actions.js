export const displayPokemon = num => ({
    type: 'DISPLAY_POKEMON',
    payload: num
});

export const changeName = name => ({
    type: 'CHANGE_NAME',
    payload: name
});

export const loadPokemon = pokemon => ({
    type: 'LOAD',
    payload: pokemon
});