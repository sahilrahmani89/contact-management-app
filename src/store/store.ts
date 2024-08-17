import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '../feature/contact/contactSlice';
import navSlice from '../feature/navbar/navSlice';

export const store = configureStore({
  reducer: {
    contact:contactSlice,
    navbar:navSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
