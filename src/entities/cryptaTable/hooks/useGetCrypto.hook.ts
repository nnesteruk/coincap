import { useEffect } from 'react';
import { fetchGetData } from '../api';
import { useAppDispatch, useAppSelector } from 'shared/state';
import { selectItem } from '../../../shared/state/slices/cryptaSlice';

export const useGetCrypto = () => {
  const dispatch = useAppDispatch();
  const crypta = useAppSelector(selectItem);

  useEffect(() => {
    dispatch(fetchGetData());
  }, []);
  return { crypta };
};
