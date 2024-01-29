import { createSlice } from '@reduxjs/toolkit';
import { Card } from '@/types/card.type';
import { cardApi } from '../services/card/card';
import { RootState } from '../store';
import { resetStates } from '../actions';

const initialState: { detail: Partial<Card> } = {
  detail: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clear: (state) => {
      state = { ...initialState };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetStates, () => initialState);
    builder.addMatcher(cardApi.endpoints.getCardDetails.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export const { clear } = cardSlice.actions;
export default cardSlice.reducer;

export const selectCardDetails = (state: RootState) => state.card.detail;
