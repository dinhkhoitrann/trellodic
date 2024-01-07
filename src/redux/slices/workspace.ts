import { createSlice } from '@reduxjs/toolkit';
import { Workspace } from '@/types/workspace.type';
import { RootState } from '../store';
import { workspaceApi } from '../services/workspace/workspace';
import { resetStates } from '../actions';

const initialState: { detail: Partial<Workspace>; list: Partial<Workspace>[] } = {
  detail: {},
  list: [],
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    save: (state, action) => {
      const { detail, list } = action.payload;
      if (detail) state.detail = detail;
      if (list) state.list = list;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetStates, () => initialState);
    builder.addMatcher(workspaceApi.endpoints.getWorkspace.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addMatcher(workspaceApi.endpoints.getWorkspaceList.matchFulfilled, (state, action) => {
      const list = action.payload;
      console.log('here');
      state.list = list;
    });
  },
});

export default workspaceSlice.reducer;
export const { save } = workspaceSlice.actions;

export const selectWorkspaceDetails = (state: RootState) => state.workspace.detail;
export const selectWorkspaceList = (state: RootState) => state.workspace.list;
