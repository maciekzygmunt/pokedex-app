import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemons-slice';
import themeSlice from './theme-slice';

const store = configureStore({
  reducer: { pokemons: pokemonsSlice.reducer, theme: themeSlice.reducer },
});
export default store;
