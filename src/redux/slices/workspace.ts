import { createSlice } from '@reduxjs/toolkit';
import { Workspace } from '@/types/workspace.type';
import { RootState } from '../store';
import { workspaceApi } from '../services/workspace/workspace';

const initialState: { detail: Partial<Workspace> } = {
  detail: {},
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    save: (state, action) => {
      state.detail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(workspaceApi.endpoints.getWorkspace.matchFulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default workspaceSlice.reducer;
export const { save } = workspaceSlice.actions;

export const selectWorkspaceDetails = (state: RootState) => state.workspace.detail;
