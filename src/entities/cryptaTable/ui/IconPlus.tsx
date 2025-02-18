import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { open, useAppDispatch } from 'shared/state';
import { Crypta } from '../../../shared/types/crypta.type';

export const IconPlus = ({ item }: { item: Crypta }) => {
  const dispatch = useAppDispatch();
  const handleOpen = useCallback(() => {
    dispatch(open({ type: 'form', data: null }));
    localStorage.setItem('currency', JSON.stringify({ ...item }));
  }, [dispatch]);
  return (
    <IconButton className="crypta-table__add-button" onClick={handleOpen}>
      <AddCircle />
    </IconButton>
  );
};
