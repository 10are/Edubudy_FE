"use client"

import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './Features/eduCards/cardSlice'

export const store = configureStore({
    reducer: {
      cards: cardSlice,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  

