import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cardReducer from './slices/card';
import boardReducer from './slices/board';
import workspaceReducer from './slices/workspace';
import userReducer from './slices/user';
import { cardApi } from './services/card/card';
import { checklistApi } from './services/card/checklist';
import { boardApi } from './services/board/board';
import { labelApi } from './services/board/label';
import { boardFilterApi } from './services/board/filter';
import { memberApi } from './services/card/member';
import { datesApi } from './services/card/dates';
import { attachmentApi } from './services/card/attachment';
import { commentApi } from './services/card/comment';
import { workspaceApi } from './services/workspace/workspace';
import { authApi } from './services/auth/auth';
import { userApi } from './services/user/user';
import { boardMemberApi } from './services/board/member';

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
    [checklistApi.reducerPath]: checklistApi.reducer,
    [boardApi.reducerPath]: boardApi.reducer,
    [boardFilterApi.reducerPath]: boardFilterApi.reducer,
    [boardMemberApi.reducerPath]: boardMemberApi.reducer,
    [labelApi.reducerPath]: labelApi.reducer,
    [memberApi.reducerPath]: memberApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
    [attachmentApi.reducerPath]: attachmentApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    card: cardReducer,
    board: boardReducer,
    workspace: workspaceReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cardApi.middleware,
      checklistApi.middleware,
      boardApi.middleware,
      boardFilterApi.middleware,
      boardMemberApi.middleware,
      labelApi.middleware,
      memberApi.middleware,
      datesApi.middleware,
      attachmentApi.middleware,
      commentApi.middleware,
      workspaceApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
