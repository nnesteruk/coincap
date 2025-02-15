import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

export const rootReducer = combineSlices();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
