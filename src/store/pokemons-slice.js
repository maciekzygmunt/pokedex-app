import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
  },
  reducers: {
    appendPokemons(state, action) {
      state.pokemons = [...state.pokemons, action.payload];
    },
  },
});

export const pokemonsActions = pokemonsSlice.actions;

export default pokemonsSlice;
