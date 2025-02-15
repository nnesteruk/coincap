export const useFormatNumbers = () => {
  const fixed = (value: string) => {
    return Number(value).toFixed(2);
  };
  const formateMarketCap = (value: string) => {
    const newValue = Number(value);
    return `${(newValue / 1e9).toFixed(1)}`;
  };
  return { fixed, formateMarketCap };
};
