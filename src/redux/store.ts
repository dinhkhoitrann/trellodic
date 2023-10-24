import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cardReducer from './slices/card';
import boardReducer from './slices/board';
import workspaceReducer from './slices/workspace';
import { cardApi } from './services/card/card';
import { checklistApi } from './services/card/checklist';
import { boardApi } from './services/board/board';
import { labelApi } from './services/board/label';
import { memberApi } from './services/card/member';
import { datesApi } from './services/card/dates';
import { attachmentApi } from './services/card/attachment';
import { descriptionApi } from './services/card/description';
import { commentApi } from './services/card/comment';
import { workspaceApi } from './services/workspace/workspace';
import { authApi } from './services/auth/auth';

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
    [checklistApi.reducerPath]: checklistApi.reducer,
    [boardApi.reducerPath]: boardApi.reducer,
    [labelApi.reducerPath]: labelApi.reducer,
    [memberApi.reducerPath]: memberApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
    [attachmentApi.reducerPath]: attachmentApi.reducer,
    [descriptionApi.reducerPath]: descriptionApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    card: cardReducer,
    board: boardReducer,
    workspace: workspaceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cardApi.middleware,
      checklistApi.middleware,
      boardApi.middleware,
      labelApi.middleware,
      memberApi.middleware,
      datesApi.middleware,
      attachmentApi.middleware,
      descriptionApi.middleware,
      commentApi.middleware,
      workspaceApi.middleware,
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
