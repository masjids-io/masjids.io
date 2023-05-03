import { configureStore } from '@reduxjs/toolkit';
import toolboxSlice from './features/toolboxSlice';

const store = configureStore({
  reducer: {
    toolbox: toolboxSlice,
  }
});

export default store;