import { createSlice } from '@reduxjs/toolkit';
import { Card } from '@/types/card.type';
import { cardApi } from '../services/card';
import { RootState } from '../store';

const initialState: { detail: Card } = {
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
    // builder.addMatcher(cardApi.endpoints.createChecklist.matchFulfilled, (state, action) => {
    //   state.detail.checklists?.push(action.payload);
    // });
    // builder.addMatcher(cardApi.endpoints.deleteChecklist.matchFulfilled, (state, action) => {
    //   const updatedChecklists = state.detail.checklists?.filter((checklist) => checklist._id !== action.payload) || [];
    //   state.detail.checklists = [...updatedChecklists];
    // });
    // builder.addMatcher(cardApi.endpoints.updateChecklistTitle.matchFulfilled, (state, action) => {
    //   const checklistIndex = state.detail.checklists!.findIndex((checklist) => checklist._id === action.payload._id);
    //   state.detail.checklists![checklistIndex].name = action.payload.name;
    // });
  },
});

export default cardSlice.reducer;

export const selectCardDetails = (state: RootState) => state.card.detail;
