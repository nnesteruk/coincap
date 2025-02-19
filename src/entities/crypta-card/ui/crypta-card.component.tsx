import { ColumType } from "shared/types";
import { BasicTable } from "shared/ui/table";
import "./crypta-card.styles.scss";
import { useStateLocation } from "shared/hooks";
import { CryptaInRow } from "../model/crypta-card.types";
import { formatCell } from "../helpers/format-cell.helpers";

export const CryptaCard = () => {
  const { currency } = useStateLocation();

  const translateProperty: { [key: string]: string } = {
    priceUsd: "Цена",
    supply: "Доступное предложение для торговли",
    maxSupply: "Общее кол-во выпущенных активов",
    volumeUsd24Hr: "Объём торгов за последние 24 часа",
    vwap24Hr: "Средняя цена по объёму за последние 24 часа",
    changePercent24Hr: "Процентные изменения цены за последние 24 часа",
    explorer: "Сайт",
  };

  const tableData: CryptaInRow[] = Object.entries(currency)
    .filter(([key, value]) => key in translateProperty && value)
    .map(([key, value]) => ({
      info: translateProperty[key],
      currencyData: formatCell(key, value),
    }));

  const columns: ColumType<CryptaInRow>[] = [
    {
      key: "info",
      label: "Информация",
    },
    {
      key: "currencyData",
      label: "Данные о валюте",
    },
  ];

  return (
    <BasicTable
      columns={columns}
      data={tableData}
      tableBodyClassName="card__body"
      tableHeadClassName="card__head"
    />
  );
};
