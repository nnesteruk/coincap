import { FC } from 'react';
import { Providers } from './providers';
import { BasicTable } from 'widgets/table/ui/table';
import { Header } from 'widgets/header';

export const App: FC = () => {
  return (
    <Providers>
      <Header />
      <BasicTable />
    </Providers>
  );
};
