import { FC } from 'react';
import { Providers } from './providers';
import { RoutesProvider } from './routes';

export const App: FC = () => {
  return (
    <Providers>
      <RoutesProvider />
    </Providers>
  );
};
