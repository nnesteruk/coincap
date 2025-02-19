import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { deleteData, useAppDispatch } from "shared/store";
import { CryptaData } from "shared/types/crypta.types";

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
