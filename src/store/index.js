import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemons-slice';

const store = configureStore({
  reducer: { pokemons: pokemonsSlice.reducer },
});
export default store;
