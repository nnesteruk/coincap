import { IconButton, TableCell, TableRow } from '@mui/material';
import { JSX } from 'react';
import { Crypta } from '../model/crypta.type';
import { AddCircle } from '@mui/icons-material';
import './table.scss';
import { open, useAppDispatch } from 'shared/state';

export const TableValue = ({ crypta }: { crypta: Crypta }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(open());
  };
  const fixed = (value: string) => {
    return Number(value).toFixed(2);
  };
  const formateMarketCap = (value: string) => {
    const newValue = Number(value);
    return `${(newValue / 1e9).toFixed(1)}`;
  };

  return (
    <TableRow
      className="crypta-table__row-crypta"
      onClick={() => console.log('Был клик')}>
      <TableCell
        scope="row"
        align="center"
        className="crypta-table__cell crypta-table__cell--rank">
        {crypta.rank}
      </TableCell>
      <TableCell
        align="center"
        className="crypta-table__cell crypta-table__cell--symbol">
        {crypta.symbol}
      </TableCell>
      <TableCell
        align="left"
        className="crypta-table__cell crypta-table__cell--name">
        {crypta.name}
      </TableCell>
      <TableCell
        align="center"
        className="crypta-table__cell crypta-table__cell--vwap">
        {`${fixed(crypta.vwap24Hr)} $`}
      </TableCell>
      <TableCell
        align="center"
        className={
          crypta.changePercent24Hr.includes('-')
            ? 'crypta-table__cell crypta-table__cell--change_red'
            : 'crypta-table__cell crypta-table__cell--change'
        }>
        {`${fixed(crypta.changePercent24Hr)} $`}
      </TableCell>
      <TableCell
        align="center"
        className="crypta-table__cell crypta-table__cell--marketcap">
        {`${formateMarketCap(crypta.marketCapUsd)} млрд. $`}
      </TableCell>
      <TableCell
        align="center"
        className="crypta-table__cell crypta-table__cell--price">
        {`${fixed(crypta?.priceUsd)} $`}
      </TableCell>
      <TableCell
        align="center"
        className="crypta-table__cell crypta-table__cell--action"
        onClick={(event) => event.stopPropagation()}>
        <IconButton className="crypta-table__add-button" onClick={handleOpen}>
          <AddCircle />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
