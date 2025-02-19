import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "shared/store";
import { selectItem } from "shared/store/slices/crypta.slice";
import { fetchGetData } from "shared/api";

export const useGetCrypta = () => {
  const dispatch = useAppDispatch();
  const crypta = useAppSelector(selectItem);

  useEffect(() => {
    dispatch(fetchGetData());
  }, []);
  return { crypta };
};
