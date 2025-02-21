import "./crypta-table.styles.scss";
import { Crypta, CryptaTableProps } from "shared/types/crypta.types";
import { FC } from "react";
import { BasicTable } from "shared/ui/table";
import { columns } from "../helpers/columns.helpers";
import { useNavigate } from "react-router";

export const CryptaTable: FC<CryptaTableProps> = ({ currentItems }) => {
  const navigate = useNavigate();
  const rowClick = (item: Crypta) => {
    navigate(`/${item.id}`, { state: item });
  };
  return (
    <div className="crypta-table">
      <BasicTable
        columns={columns}
        data={currentItems}
        tableHeadClassName="crypta-table__head"
        tableHeadRowClassName="crypta-table__row-head"
        tableBodyClassName="crypta-table__body"
        tableRowBodyClassName="crypta-table__row-crypta"
        onRowClick={rowClick}
      />
    </div>
  );
};
