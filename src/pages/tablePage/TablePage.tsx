import { CryptaTable, useGetCrypto } from 'entities/cryptaTable';
import { Pagination } from 'features/pagination';
import { usePaginationItems } from 'shared/hooks';

export const TablePage = () => {
  const { crypta } = useGetCrypto();
  const { totalPages, currentItems, currentPage, handlePage } =
    usePaginationItems(crypta || []);

  return (
    <div className="container">
      <CryptaTable currentItems={currentItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePage={handlePage}
      />
    </div>
  );
};
