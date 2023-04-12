import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './redux/theme';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
