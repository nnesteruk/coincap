import { Outlet } from "react-router";
import { Header } from "widgets/header";
import { ModalWithLogic } from "widgets/modal-with-logic";
import "./main.styles.scss";

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
