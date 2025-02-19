import { CryptaData } from "shared/types/crypta.types";
import { FormEvent } from "react";
import { addData, close, useAppDispatch } from "shared/store";

export const useSubmit = (currency: CryptaData | null) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
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
    dispatch(close());
    form.reset();
  };
  return { handleSubmit };
};
