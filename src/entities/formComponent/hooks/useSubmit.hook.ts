import { CryptaData } from 'shared/types/crypta.type';
import { FormEvent } from 'react';
import { addData, close, useAppDispatch } from 'shared/state';

export const useSubmit = (currency: CryptaData | null) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );
    const count = Number(data.count);
    if (!currency) return;

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
