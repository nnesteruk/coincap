import { ColumType } from "shared/types";
import { BasicTable } from "shared/ui/table";
import { CryptaInRow } from "../model/crypta-card.types";
import "./crypta-card.styles.scss";
import { tableData } from "../helpers/table-data.helpers";

export const CryptaCard = () => {
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
