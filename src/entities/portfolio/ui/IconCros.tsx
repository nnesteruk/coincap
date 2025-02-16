import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { deleteData, useAppDispatch } from 'shared/state';
import { CryptaData } from 'entities/cryptaTable/model/crypta.type';

export const IconCros = ({ item }: { item: CryptaData }) => {
  const dispatch = useAppDispatch();
  const deleteCrypta = () => {
    dispatch(deleteData({ ...item }));
  };
  return (
    <IconButton onClick={deleteCrypta}>
      <CloseIcon />
    </IconButton>
  );
};
