import { config } from "../model/config";
import "./form.styles.scss";
import { useSubmit } from "../hooks/use-submit.hook";
import { CryptaData } from "shared/types/crypta.types";
import { selectType, useAppSelector } from "shared/store";
import { Button, Typography } from "@mui/material";

export const FormComponent = () => {
  const currencyString = localStorage.getItem("currency");
  const currency: CryptaData | null = currencyString
    ? JSON.parse(currencyString)
    : null;
  const type = useAppSelector(selectType);

  const { handleSubmit } = useSubmit(currency);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {type === "form" && (
          <h1 className="form__title">
            Купить <span>{currency?.name || ""}</span>
          </h1>
        )}
        <Typography className="form__subtitle">Введите количество</Typography>
        {config.map((item) => (
          <input
            key={item.name}
            {...item}
            pattern={item.pattern?.source}
            className="form__input"
          />
        ))}
        <Button
          type="submit"
          variant="outlined"
          size="medium"
          className="form__button">
          Добавить
        </Button>
      </form>
    </div>
  );
};
