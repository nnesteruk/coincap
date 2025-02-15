import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '../store';

const initialState: { isOpen: boolean } = {
  isOpen: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
  selectors: {
    selectIsOpen: (state) => {
      return state.isOpen;
    },
  },
}).injectInto(rootReducer);

export const { reducer } = modalSlice;
export const { open, close } = modalSlice.actions;
export const { selectIsOpen } = modalSlice.selectors;
