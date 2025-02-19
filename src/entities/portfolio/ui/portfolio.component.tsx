import { CryptaData } from "shared/types/crypta.types";
import { selectData, selectSum, useAppSelector } from "shared/store";
import { ColumType } from "shared/types";
import { BasicTable } from "shared/ui/table";
import "./portfolio.styles.scss";
import { IconCros } from "./icon-cros.component";
import { fixed } from "shared/helpers";

export const Portfolio = () => {
  const data = useAppSelector(selectData);
  const suma = useAppSelector(selectSum);
  const columns: ColumType<CryptaData>[] = [
    {
      key: "name",
      label: "Название ",
      attributes: { align: "center" },
    },
    {
      key: "priceUsd",
      label: "Цена ",
      attributes: { align: "center" },
      reactNode(value) {
        return fixed(String(value));
      },
    },
    {
      key: "count",
      label: "Кол-во ",
      attributes: { align: "center" },
    },
    {
      key: "suma",
      label: "Итого ",
      attributes: { align: "center" },
      reactNode(value) {
        return `${fixed(String(value))}` + " $";
      },
    },
    {
      key: "delete",
      label: "",
      attributes: { align: "center", className: "portfolio__button" },
      reactNode(_, row) {
        return <IconCros item={row} />;
      },
    },
  ];
  return (
    <div className="portfolio">
      <h1>Портфель</h1>
      <BasicTable
        columns={columns}
        data={data}
        tableRowBodyClassName="portfolio__body-row"
      />
      <p>
        Итого:{" "}
        <span className="portfolio__suma">
          {suma ? fixed(String(suma)) : 0} $
        </span>
      </p>
    </div>
  );
};
