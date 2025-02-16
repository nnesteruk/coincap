import { FC } from 'react';
import { Providers } from './providers';
import { TablePage } from 'pages/index';

export const App: FC = () => {
  return (
    <Providers>
      <TablePage />
    </Providers>
  );
};
