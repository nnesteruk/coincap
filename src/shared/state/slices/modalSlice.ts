import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '../store';

const initialState: {
  isOpen: boolean;
  type: 'form' | 'portfolio' | '';
  data: unknown;
} = {
  isOpen: false,
  type: '',
  data: null,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    close: (state) => {
      state.isOpen = false;
      state.type = '';
      state.data = null;
    },
  },
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectType: (state) => state.type,
  },
}).injectInto(rootReducer);

export const { reducer } = modalSlice;
export const { open, close } = modalSlice.actions;
export const { selectIsOpen, selectType } = modalSlice.selectors;
