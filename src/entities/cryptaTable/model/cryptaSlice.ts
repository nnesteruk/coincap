import { createSlice } from '@reduxjs/toolkit';
import { CryptaSliceInitialState } from './crypta.type';
import { fetchGetData } from '../api';
import { RootState } from 'shared/store';
import { rootReducer } from 'shared/store/store';

const initialState: CryptaSliceInitialState = {
  crypta: [],
  isLoading: false,
  error: '',
};

export const cryptaSlice = createSlice({
  name: 'crypta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetData.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchGetData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.crypta = action.payload || [];
        state.error = '';
      })
      .addCase(fetchGetData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `${action.payload}`;
      });
  },
  selectors: {
    selectItem: (state) => state.crypta,
    selectError: (state) => state.error,
    selectIsLoading: (state) => state.isLoading,
  },
}).injectInto(rootReducer);

export const { reducer } = cryptaSlice;
export const { selectItem, selectIsLoading, selectError } =
  cryptaSlice.selectors;
