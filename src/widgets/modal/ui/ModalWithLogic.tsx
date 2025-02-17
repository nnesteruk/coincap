import { FormComponent } from 'entities/formComponent';
import { Portfolio } from 'entities/portfolio';
import { PropsWithChildren } from 'react';
import {
  close,
  selectIsOpen,
  selectType,
  useAppDispatch,
  useAppSelector,
} from 'shared/state';
import { BasicModal } from 'shared/ui/modal';

export const ModalWithLogic = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectIsOpen);
  const handleClose = () => {
    dispatch(close());
  };
  const type = useAppSelector(selectType);
  const className = type === 'portfolio' ? 'modal-size' : '';

  return (
    <BasicModal open={open} close={handleClose} className={className}>
      {type === 'portfolio' ? <Portfolio /> : <FormComponent />}
    </BasicModal>
  );
};
