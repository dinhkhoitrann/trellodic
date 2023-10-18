import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardApi } from './services/card/card';
import cardReducer from './slices/card';
import boardReducer from './slices/board';
import { checklistApi } from './services/card/checklist';
import { boardApi } from './services/board/board';
import { labelApi } from './services/board/label';
import { memberApi } from './services/card/member';
import { datesApi } from './services/card/dates';
import { attachmentApi } from './services/card/attachment';
import { descriptionApi } from './services/card/description';
import { commentApi } from './services/card/comment';

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
    card: cardReducer,
    board: boardReducer,
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
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
