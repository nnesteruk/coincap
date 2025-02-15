import { FormEvent } from 'react';
import { config } from '../model/config';
import './modal.scss';
import { Crypta } from 'entities/cryptaTable/model/crypta.type';
import { close, useAppDispatch } from 'shared/state';
import { addData } from 'shared/state/slices/cryptaSlice';

export const FormComponent = () => {
  const dispatch = useAppDispatch();
  const handlelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );
    const currency: Crypta | undefined = JSON.parse(
      localStorage.getItem('currency') ?? `${undefined}`,
    );
    console.log({
      name: currency?.name,
      price: currency?.priceUsd,
      count: data.count,
      suma: Number(data.count) * Number(currency?.priceUsd),
    });
    dispatch(
      addData({
        name: currency?.name,
        price: currency?.priceUsd,
        count: data.count,
        suma: Number(data.count) * Number(currency?.priceUsd),
      }),
    );
    localStorage.setItem(
      'newCurrency',
      JSON.stringify({
        name: currency?.name,
        price: currency?.priceUsd,
        count: data.count,
        suma: Number(data.count) * Number(currency?.priceUsd),
      }),
    );
    dispatch(close());
  };
  return (
    <div className="modal">
      <h1 className="modal__title">Купить</h1>
      <form onSubmit={handlelSubmit} className="form">
        <p className="form__title">Введите количество</p>
        {config.map((item) => (
          <input
            key={item.name}
            {...item}
            pattern={item.pattern?.source}
            className="form__input"
          />
        ))}
        <button type="submit" className="form__button">
          Добавить
        </button>
      </form>
    </div>
  );
};
