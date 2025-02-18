import { Outlet } from 'react-router';
import { Header } from 'widgets/header';
import { ModalWithLogic } from 'widgets/modal';
import './Main.scss';

export const Main = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <ModalWithLogic />
    </div>
  );
};
