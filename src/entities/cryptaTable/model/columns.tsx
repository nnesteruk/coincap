import { ColumType } from 'shared/types';
import { useFormatNumbers } from '../../../shared/hooks/useFormatNumber';
import { CryptaWithPlus } from '../../../shared/types/crypta.type';
import { IconPlus } from '../ui/IconPlus';

const { fixed, formateMarketCap } = useFormatNumbers();
export const columns: ColumType<CryptaWithPlus>[] = [
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
    attributes: { align: 'center', className: 'crypta-table__cell' },
    reactNode(value) {
      const className = String(value).includes('-')
        ? 'crypta-table__cell--change_red'
        : 'crypta-table__cell--change';

      return <span className={className}>{fixed(String(value))}%</span>;
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
      return `${formateMarketCap(String(value))} млрд. $`;
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
      onClick: (e) => e?.stopPropagation(),
    },
    reactNode(_, row) {
      return <IconPlus item={row} />;
    },
  },
];
