import { PropsWithChildren } from "react";
import {
  close,
  selectIsOpen,
  useAppDispatch,
  useAppSelector,
} from "shared/state";
import { BasicModal } from "shared/ui/modal";

export const ModalWithRedux = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectIsOpen);
  const handleClose = () => {
    dispatch(close());
  };

  return (
    <BasicModal open={open} close={handleClose}>
      {children}
    </BasicModal>
  );
};
