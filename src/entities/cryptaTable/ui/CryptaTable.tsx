import './table.scss';
import { Crypta, CryptaTableProps } from '../model/crypta.type';
import { FC } from 'react';
import { TableComponent } from 'shared/ui/tableComponent';
import { columns } from '../model/columns';
import { useNavigate } from 'react-router';

export const CryptaTable: FC<CryptaTableProps> = ({ currentItems }) => {
  const navigate = useNavigate();
  const rowClick = (item: Crypta) => {
    navigate(`/${item.id}`, { state: item });
  };
  return (
    <div className="crypta-table">
      <TableComponent
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
