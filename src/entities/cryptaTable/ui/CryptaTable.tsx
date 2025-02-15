import {
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  IconButton,
} from '@mui/material';
import './table.scss';
import { Crypta } from '../model/crypta.type';
import { TableValue } from './TableValue';
import { FC } from 'react';
import { TableComponent } from 'shared/ui';
import { AddCircle } from '@mui/icons-material';
import { ColumType } from 'shared/ui/TableComponent';

type CryptaTable = {
  currentItems: Crypta[];
};
const fixed = (value: string) => {
  return Number(value).toFixed(2);
};
const formateMarketCap = (value: string) => {
  const newValue = Number(value);
  return `${(newValue / 1e9).toFixed(1)}`;
};

const columns: ColumType<Crypta>[] = [
  {
    key: 'rank',
    label: '№',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--rank',
    },
  },
  {
    key: 'symbol',
    label: '',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--symbol',
    },
  },
  {
    key: 'name',
    label: 'Name',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--name',
    },
  },
  {
    key: 'vwap24Hr',
    label: 'VWAP (24Hr)',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--vwap',
    },
    reactNode(value) {
      return `${fixed(String(value))} $`;
    },
  },
  {
    key: 'changePercent24Hr',
    label: 'Change(24Hr)',
    attributes: { align: 'center' },
    reactNode(value) {
      const className = String(value).includes('-')
        ? 'crypta-table__cell crypta-table__cell--change_red'
        : 'crypta-table__cell crypta-table__cell--change';

      return <span className={className}>{fixed(String(value))};</span>;
    },
  },
  {
    key: 'marketCapUsd',
    label: 'MarketCap',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--marketcap',
    },
    reactNode(value) {
      return `${formateMarketCap(String(value))} $`;
    },
  },
  {
    key: 'priceUsd',
    label: 'Price',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--price',
    },
    reactNode(value) {
      return `${fixed(String(value))} $`;
    },
  },
  {
    key: 'plus',
    label: '',
    attributes: {
      align: 'center',
      className: 'crypta-table__cell crypta-table__cell--action',
    },
    reactNode() {
      return (
        <IconButton className="crypta-table__add-button">
          <AddCircle />
        </IconButton>
      );
    },
  },
];

export const CryptaTable: FC<CryptaTable> = ({ currentItems }) => {
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
