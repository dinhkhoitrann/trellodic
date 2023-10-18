import { createSlice } from '@reduxjs/toolkit';
import { Card } from '@/types/card.type';
import { cardApi } from '../services/card/card';
import { RootState } from '../store';

const initialState: { detail: Partial<Card> } = {
  detail: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(cardApi.endpoints.getCardDetails.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default cardSlice.reducer;

export const selectCardDetails = (state: RootState) => state.card.detail;
