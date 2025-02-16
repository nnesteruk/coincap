import { CryptaTable, useGetCrypto } from 'entities/cryptaTable';
import { Pagination } from 'features/pagination';
import { usePaginationItems } from 'shared/hooks';
import { Header } from 'widgets/header';
import { ModalWithLogic } from 'widgets/modal';

export const TablePage = () => {
  const { crypta } = useGetCrypto();
  const { totalPages, currentItems, currentPage, handlePage } =
    usePaginationItems(crypta || []);

  return (
    <>
      <Header />
      <CryptaTable currentItems={currentItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePage={handlePage}
      />
      <ModalWithLogic />
    </>
  );
};
