export type Crypta = {
  changePercent24Hr: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  rank: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
  priceUsd: string;
  plus?: string;
};

export type CryptaData = Pick<Crypta, 'name' | 'priceUsd'> & {
  count: number;
  suma: number;
};
export type CryptaSliceInitialState = {
  crypta: Crypta[];
  isLoading: boolean;
  error: string;
  data: CryptaData[] | null;
};

export type CryptaTableProps = {
  currentItems: Crypta[];
};
