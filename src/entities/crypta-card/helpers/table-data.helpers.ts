import { useStateLocation } from "shared/hooks";
import { CryptaInRow } from "../model/crypta-card.types";
import { formatCell } from "./format-cell.helpers";

const translateProperty: { [key: string]: string } = {
  priceUsd: "Цена",
  supply: "Доступное предложение для торговли",
  maxSupply: "Общее кол-во выпущенных активов",
  volumeUsd24Hr: "Объём торгов за последние 24 часа",
  vwap24Hr: "Средняя цена по объёму за последние 24 часа",
  changePercent24Hr: "Процентные изменения цены за последние 24 часа",
  explorer: "Сайт",
};
const { currency } = useStateLocation();

export const tableData: CryptaInRow[] = Object.entries(currency)
  .filter(([key, value]) => key in translateProperty && value)
  .map(([key, value]) => ({
    info: translateProperty[key],
    currencyData: formatCell(key, value),
  }));
