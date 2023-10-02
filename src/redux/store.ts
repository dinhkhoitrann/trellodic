import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardApi } from './services/card/card';
import cardReducer from './slices/card';
import { checklistApi } from './services/card/checklist';

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
    [checklistApi.reducerPath]: checklistApi.reducer,
    card: cardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([cardApi.middleware, checklistApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
