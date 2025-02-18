import { ColumType } from "shared/types";
import { TableComponent } from "shared/ui/tableComponent";
import { useStateLocation } from "shared/hooks";
import { CryptaInRow } from "../model/cryptaCard.type";
import "./CryptaCard.scss";

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

  const formatCell = (key: string, value: string) => {
    if (!value) return "-";
    if (key === "changePercent24Hr") {
      const numValue = Number(value);
      return (
        <span className={numValue > 0 ? "green" : "red"}>
          {numValue.toFixed(2)} %
        </span>
      );
    }
    if (key === "explorer") {
      return (
        <a href={String(value)} target="_blank" className="card__link">
          {value.slice(0, 30)}
        </a>
      );
    }
    const numValue = typeof value === "string" ? Number(value) : value;
    if (isNaN(numValue)) return value;

    switch (true) {
      case numValue >= 1e9:
        return `${(numValue / 1e9).toFixed(2)} млрд $`;
      case numValue >= 1e6:
        return `${(numValue / 1e6).toFixed(2)} млн $`;
      case numValue >= 1e3:
        return `${numValue.toFixed(2)} $`;

      default:
        return `${numValue.toFixed(2).toString()} $`;
    }
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
    <TableComponent
      columns={columns}
      data={tableData}
      tableBodyClassName="card__body"
      tableHeadClassName="card__head"
    />
  );
};
