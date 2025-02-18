import { CryptaPage } from "pages/cryptaPage";
import { TablePage } from "pages/index";
import { Main } from "pages/main";
import { BrowserRouter, Route, Routes } from "react-router";
import { BASE_NAME, CRYPTA_PAGE, MAIN } from "shared/config";

export const RoutesProvider = () => {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Routes>
        <Route element={<Main />}>
          <Route path={MAIN} element={<TablePage />} />
          <Route path={CRYPTA_PAGE} element={<CryptaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
