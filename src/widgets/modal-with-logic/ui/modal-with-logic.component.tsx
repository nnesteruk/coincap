import { FormComponent } from "entities/form";
import { Portfolio } from "entities/portfolio";
import {
  close,
  selectIsOpen,
  selectType,
  useAppDispatch,
  useAppSelector,
} from "shared/store";
import { BasicModal } from "shared/ui/modal";

export const ModalWithLogic = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectIsOpen);
  const handleClose = () => {
    dispatch(close());
  };
  const type = useAppSelector(selectType);
  const className = type === "portfolio" ? "modal-size" : "modal__form-size";

  return (
    <BasicModal open={open} close={handleClose} className={className}>
      {type === "portfolio" ? <Portfolio /> : <FormComponent />}
    </BasicModal>
  );
};
