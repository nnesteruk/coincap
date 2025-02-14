import { FC } from 'react';
import { Providers } from './providers';
import { TablePage } from 'pages/index';
import { BasicModal } from 'widgets/modal';

export const App: FC = () => {
  return (
    <Providers>
      <TablePage />
      <BasicModal />
    </Providers>
  );
};
