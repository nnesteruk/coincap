export const formateMarketCap = (value: string) => {
  const newValue = Number(value);
  return `${(newValue / 1e9).toFixed(1)}`;
};
