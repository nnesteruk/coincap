import { Modal } from "@mui/material";
import { JSX, PropsWithChildren } from "react";
import "./basicModal.scss";

type BasicModalProps = PropsWithChildren<{
  open: boolean;
  close: () => void;
  className?: string;
}>;
export const BasicModal = ({
  children,
  open,
  close,
  className,
}: BasicModalProps): JSX.Element => {
  return (
    <Modal open={open} onClose={close}>
      <div className={`modal ${className}`}>{children}</div>
    </Modal>
  );
};
