import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    lightTheme: true,
  },
  reducers: {
    toggleTheme(state, action) {
      state.lightTheme = !state.lightTheme;
      localStorage.setItem('lightTheme', state.lightTheme);
    },
    setTheme(state, action) {
      state.lightTheme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
