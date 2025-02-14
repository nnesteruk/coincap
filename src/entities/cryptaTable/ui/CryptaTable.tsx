import {
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
} from '@mui/material';
import './table.scss';
import { Crypta } from '../model/crypta.type';
import { TableValue } from './TableValue';
import { FC } from 'react';

type CryptaTable = {
  currentItems: Crypta[];
};

export const CryptaTable: FC<CryptaTable> = ({ currentItems }) => {
  return (
    <div className="crypta-table">
      <Table>
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
      </Table>
    </div>
  );
};
