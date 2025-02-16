import { CryptaData } from 'entities/cryptaTable/model/crypta.type';
import { FormEvent } from 'react';
import { addData, close, useAppDispatch } from 'shared/state';

export const useSubmit = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );
    const count = Number(data.count);
    const currencyString = localStorage.getItem('currency');
    if (!currencyString) return;

    const currency: CryptaData = JSON.parse(currencyString);

    dispatch(
      addData({
        id: currency.id,
        name: currency.name,
        priceUsd: currency.priceUsd,
        count,
        suma: count * Number(currency.priceUsd),
      }),
    );
    // localStorage.setItem(
    //   'newCurrency',
    //   JSON.stringify({
    //     name: currency.name,
    //     price: currency?.priceUsd,
    //     count: data.count,
    //     suma: Number(data.count) * Number(currency?.priceUsd),
    //   }),
    // );
    dispatch(close());
  };

  return { handleSubmit };
};
