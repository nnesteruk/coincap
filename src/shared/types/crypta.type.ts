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
};
export type CryptaWithPlus = Crypta & { plus?: string };

export type CryptaData = Pick<Crypta, "name" | "priceUsd" | "id"> & {
  count: number;
  suma: number;
  delete?: string;
};
export type CryptaHistory = Pick<Crypta, "priceUsd"> & {
  time: number;
  date: string;
};

export type CryptaSliceInitialState = {
  crypta: Crypta[];
  isLoading: boolean;
  error: string;
  data: CryptaData[] | null;
  history: CryptaHistory[] | null;
};

export type CryptaTableProps = {
  currentItems: Crypta[];
};
