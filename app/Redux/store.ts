"use client"

import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './Features/eduCards/cardSlice'
import authReducer from './auth/authSlice';

export const store = configureStore({
    reducer: {
      cards: cardSlice,
      auth: authReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  

