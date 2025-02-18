import { useState } from "react";
import { Crypta } from "shared/types/crypta.type";

export const usePaginationItems = (crypta: Crypta[], itemsPerPage = 20) => {
  const [currentPage, setcurrentPage] = useState(1);

  const stratIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = stratIndex + itemsPerPage;
  const currentItems = crypta.slice(stratIndex, endIndex);

  const totalPages = Math.ceil(crypta.length / itemsPerPage);

  const handlePage = (page: number) => {
    setcurrentPage(page);
  };
  return { totalPages, currentItems, currentPage, handlePage };
};
