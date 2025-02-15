import { Modal } from '@mui/material';
import { JSX, PropsWithChildren } from 'react';
import './basicModal.scss';

type BasicModalProps = PropsWithChildren<{
  open: boolean;
  close: () => void;
}>;
export const BasicModal = ({
  children,
  open,
  close,
}: BasicModalProps): JSX.Element => {
  return (
    <Modal open={open} onClose={close}>
      <div className="modal">{children}</div>
    </Modal>
  );
};
