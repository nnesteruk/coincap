import './table.scss';
import { Crypta, CryptaTableProps } from '../../../shared/types/crypta.type';
import { FC } from 'react';
import { TableComponent } from 'shared/ui/tableComponent';
import { columns } from '../model/columns';
import { useNavigate } from 'react-router';
import { selectIsLoading, useAppSelector } from 'shared/state';

export const CryptaTable: FC<CryptaTableProps> = ({ currentItems }) => {
  const navigate = useNavigate();
  const rowClick = (item: Crypta) => {
    navigate(`/${item.id}`, { state: item });
  };
  const isLoading = useAppSelector(selectIsLoading);
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
