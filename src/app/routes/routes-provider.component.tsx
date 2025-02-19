import { CryptaPage } from "pages/crypta";
import { TablePage } from "pages/index";
import { Main } from "pages/main";
import { BrowserRouter, Route, Routes } from "react-router";
import { RoutesPath } from "shared/config";

export const RoutesProvider = () => {
  return (
    <BrowserRouter basename={RoutesPath.BASE_NAME}>
      <Routes>
        <Route element={<Main />}>
          <Route path={RoutesPath.MAIN} element={<TablePage />} />
          <Route path={RoutesPath.CRYPTA_PAGE} element={<CryptaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
