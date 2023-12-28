"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetch('http://localhost:4000/cards');
  const data = await response.json();
  return data;
});

const cardSlice = createSlice({
  name: 'cards', 
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default cardSlice.reducer;

