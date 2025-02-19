import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Crypta,
  CryptaData,
  CryptaHistory,
  CryptaSliceInitialState,
} from "shared/types/crypta.types";
import { rootReducer } from "shared/store/store";
import { fetchGetData, fetchGetHistory } from "shared/api/fetch-crypta-api";

const portfolio = localStorage.getItem("portfolio");
const parsedPortfolio = portfolio ? JSON.parse(portfolio) : null;

const initialState: CryptaSliceInitialState = {
  crypta: [],
  isLoading: false,
  error: "",
  data: parsedPortfolio,
  history: null,
};

export const cryptaSlice = createSlice({
  name: "crypta",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<CryptaData>) => {
      if (!state.data) {
        state.data = [action.payload];
        localStorage.setItem("portfolio", JSON.stringify(state.data));
      } else {
        const existItem = state.data.find(
          (item) => item.id === action.payload.id,
        );
        if (existItem) {
          existItem.count += action.payload.count;
          existItem.suma += action.payload.suma;
          localStorage.setItem("portfolio", JSON.stringify(state.data));
        } else {
          state.data.push(action.payload);
          localStorage.setItem("portfolio", JSON.stringify(state.data));
        }
      }
    },
    deleteData: (state, action: PayloadAction<CryptaData>) => {
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("portfolio", JSON.stringify(state.data));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetData.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchGetData.fulfilled,
        (state, action: PayloadAction<Crypta[]>) => {
          state.isLoading = false;
          state.crypta = action.payload || [];
          state.error = "";
        },
      )
      .addCase(fetchGetData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `${action.payload}`;
      })
      .addCase(fetchGetHistory.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchGetHistory.fulfilled,
        (state, action: PayloadAction<CryptaHistory[]>) => {
          state.isLoading = false;
          state.history = action.payload || [];
          state.error = "";
        },
      )
      .addCase(fetchGetHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `${action.payload}`;
      });
  },
  selectors: {
    selectItem: (state) => state.crypta,
    selectError: (state) => state.error,
    selectIsLoading: (state) => state.isLoading,
    selectTopThree: (state) => state.crypta.slice(0, 3),
    selectSum: (state) => {
      return state.data?.reduce((result, item) => {
        return (result = result + Number(item.suma));
      }, 0);
    },
    selectData: (state) => {
      return state.data;
    },
    selectHistory: (state) => state.history,
  },
}).injectInto(rootReducer);

export const { reducer } = cryptaSlice;
export const { addData, deleteData } = cryptaSlice.actions;
export const {
  selectItem,
  selectIsLoading,
  selectError,
  selectTopThree,
  selectSum,
  selectData,
  selectHistory,
} = cryptaSlice.selectors;
