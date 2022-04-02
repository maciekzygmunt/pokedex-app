import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    sorting: '',
  },
  reducers: {
    appendPokemons(state, action) {
      state.pokemons = [...state.pokemons, action.payload];
    },
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
    setSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});

export const pokemonsActions = pokemonsSlice.actions;

export default pokemonsSlice;
