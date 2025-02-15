import { createSlice } from '@reduxjs/toolkit';
import { CryptaSliceInitialState } from '../../../entities/cryptaTable/model/crypta.type';
import { fetchGetData } from '../../../entities/cryptaTable/api';
import { rootReducer } from 'shared/state/store';

const initialState: CryptaSliceInitialState = {
  crypta: [],
  isLoading: false,
  error: '',
  data: null,
};

export const cryptaSlice = createSlice({
  name: 'crypta',
  initialState,
  reducers: {
    addData: (state, action) => {
      if (!state.data) {
        state.data = [action.payload];
      } else {
        state.data.push(action.payload);
      }
    },
  },
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
    selectTopThree: (state) => state.crypta.slice(0, 3),
    selectSuma: (state) => {
      return state.data?.reduce((result, item) => {
        return (result = result + Number(item.suma));
      }, 0);
    },
  },
}).injectInto(rootReducer);

export const { reducer } = cryptaSlice;
export const { addData } = cryptaSlice.actions;
export const {
  selectItem,
  selectIsLoading,
  selectError,
  selectTopThree,
  selectSuma,
} = cryptaSlice.selectors;
