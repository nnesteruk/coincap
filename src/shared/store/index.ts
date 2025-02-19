export { store } from "./store";
export type { RootState, AppDispatch } from "./types/store.types";
export {
  useAppDispatch,
  useAppSelector,
  createAppAsyncThunk,
} from "./hooks/store.hooks";
export { open, close, selectIsOpen, selectType } from "./slices/modal.slice";
export {
  addData,
  deleteData,
  cryptaSlice,
  selectError,
  selectIsLoading,
  selectItem,
  selectSum,
  selectTopThree,
  selectData,
  selectHistory,
} from "./slices/crypta.slice";
