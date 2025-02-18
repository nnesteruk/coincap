export { store } from "./store";
export type { RootState, AppDispatch } from "./redux.type";
export {
  useAppDispatch,
  useAppSelector,
  createAppAsyncThunk,
} from "./hooks/redux.hooks";
export { open, close, selectIsOpen, selectType } from "./slices/modalSlice";
export {
  addData,
  deleteData,
  cryptaSlice,
  selectError,
  selectIsLoading,
  selectItem,
  selectSuma,
  selectTopThree,
  selectData,
  selectHistory,
} from "./slices/cryptaSlice";
