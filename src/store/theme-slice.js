import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    lightTheme: true,
  },
  reducers: {
    toggleTheme(state, action) {
      state.lightTheme = !state.lightTheme;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
