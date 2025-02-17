import { Crypta } from 'shared/types/crypta.type';
import { useLocation } from 'react-router';

export const useStateLocation = () => {
  const location = useLocation();
  const currency: Crypta = location.state;
  return { currency, location };
};
