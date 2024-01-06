import { createSlice } from '@reduxjs/toolkit';
import { Board } from '@/types/board.type';
import { RootState } from '../store';
import { boardApi } from '../services/board/board';
import { boardFilterApi } from '../services/board/filter';
import { resetStates } from '../actions';

const initialState: { detail: Partial<Board>; filter: { labelIds?: string[] }; loading: boolean } = {
  detail: {},
  filter: {},
  loading: false,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    save: (state, action) => {
      state.detail = action.payload;
    },
    clearAllBoardFilter: (state) => {
      state.filter = { ...initialState.filter };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetStates, () => initialState);
    builder.addMatcher(boardApi.endpoints.getBoardDetails.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addMatcher(boardFilterApi.endpoints.filterBoard.matchPending, (state) => {
      state.loading = true;
    });
    builder.addMatcher(boardFilterApi.endpoints.filterBoard.matchFulfilled, (state, action) => {
      state.detail = action.payload;
      if (action.payload.filteredLabelIds) {
        state.filter.labelIds = action.payload.filteredLabelIds;
      }
      state.loading = false;
    });
  },
});

export const { save, clearAllBoardFilter } = boardSlice.actions;
export default boardSlice.reducer;

export const selectBoardDetails = (state: RootState) => state.board.detail;
export const selectBoardLoading = (state: RootState) => state.board.loading;
export const selectBoardFilter = (state: RootState) => state.board.filter;
