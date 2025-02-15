import './table.scss';
import { CryptaTableProps } from '../model/crypta.type';
import { FC } from 'react';
import { TableComponent } from 'shared/ui/tableComponent';
import { columns } from '../model/columns';

export const CryptaTable: FC<CryptaTableProps> = ({ currentItems }) => {
  return (
    <div className="crypta-table">
      <TableComponent
        columns={columns}
        data={currentItems}
        tableHeadClassName="crypta-table__head"
        tableHeadRowClassName="crypta-table__row-head"
        tableBodyClassName="crypta-table__body"
        tableRowBodyClassName="crypta-table__row-crypta"
      />
      {/* <Table>
        <TableHead className="crypta-table__head">
          <TableRow className="crypta-table__row-head">
            <TableCell align="center">№</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">VWAP&nbsp;(24Hr)</TableCell>
            <TableCell align="center">Change&nbsp;(24Hr)</TableCell>
            <TableCell align="center">Market&nbsp;Cap</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="crypta-table__body">
          {currentItems?.map((crypta: Crypta) => (
            <TableValue key={crypta.id} crypta={crypta} />
          ))}
        </TableBody>
      </Table> */}
    </div>
  );
};
