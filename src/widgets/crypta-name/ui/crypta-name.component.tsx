import { useStateLocation } from "shared/hooks";
import "./crypta-name.styles.scss";

export const CryptaName = () => {
  const { currency } = useStateLocation();
  const { symbol, name } = currency;
  return (
    <h1 className="title">
      <span>{symbol}</span>&nbsp;
      {name}
    </h1>
  );
};
