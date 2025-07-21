import { ColorMode } from '@aws-amplify/ui-react';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'system' as ColorMode,
  },
  reducers: {
    changeTheme: (state, { payload }: { payload: ColorMode }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
