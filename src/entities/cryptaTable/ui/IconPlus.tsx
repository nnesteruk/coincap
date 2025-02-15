import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { open, useAppDispatch } from 'shared/state';

export const IconPlus = () => {
  const dispatch = useAppDispatch();
  const handleOpen = useCallback(() => {
    dispatch(open());
  }, [dispatch]);
  return (
    <IconButton className="crypta-table__add-button" onClick={handleOpen}>
      <AddCircle />
    </IconButton>
  );
};
