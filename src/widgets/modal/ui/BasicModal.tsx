import { Modal } from '@mui/material';
import { FormEvent, JSX } from 'react';
import './modal.scss';
import { config } from '../model/config';
import { close, useAppDispatch, useAppSelector } from 'shared/state';
import { selectIsOpen } from 'shared/state/slices/modalSlice';

export const BasicModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectIsOpen);
  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );
    console.log(data);
    console.log(open);
    return data;
  };
  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <h1 className="modal__title">Купить</h1>
        <form onSubmit={handelSubmit} className="form">
          <p className="form__title">Введите количество</p>
          {config.map((item) => (
            <input key={item.name} {...item} className="form__input" />
          ))}
          <button type="submit" className="form__button">
            Добавить
          </button>
        </form>
      </div>
    </Modal>
  );
};
