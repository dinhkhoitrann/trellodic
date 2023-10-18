import { createSlice } from '@reduxjs/toolkit';
import { Board } from '@/types/board.type';
import { RootState } from '../store';
import { boardApi } from '../services/board/board';

const initialState: { detail: Partial<Board> } = {
  detail: {},
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(boardApi.endpoints.getBoardDetails.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default boardSlice.reducer;

export const selectBoardDetails = (state: RootState) => state.board.detail;
