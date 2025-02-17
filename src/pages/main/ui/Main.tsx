import { Outlet } from 'react-router';
import { Header } from 'widgets/header';
import { ModalWithLogic } from 'widgets/modal';

export const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ModalWithLogic />
    </div>
  );
};
