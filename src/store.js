import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from './features/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsSlice,
  }
});

export default store;