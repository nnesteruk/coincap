import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/state';
import { selectItem } from '../../../shared/state/slices/cryptaSlice';
import { fetchGetData } from 'shared/api';

export const useGetCrypto = () => {
  const dispatch = useAppDispatch();
  const crypta = useAppSelector(selectItem);

  useEffect(() => {
    dispatch(fetchGetData());
  }, []);
  return { crypta };
};
