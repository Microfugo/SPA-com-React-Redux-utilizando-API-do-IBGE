import localidadesReducer from "./localidadesSlicer"
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    localidades:localidadesReducer,
  },
});
