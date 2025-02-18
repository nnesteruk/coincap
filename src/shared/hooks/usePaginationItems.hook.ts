import { useState } from 'react';
import { Crypta } from 'shared/types/crypta.type';

export const usePaginationItems = (crypta: Crypta[]) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  // if (!crypta || crypta.length === 0) {
  //   return {
  //     totalPages: 0,
  //     currentItems: [],
  //     currentPage,
  //     handlePage: () => {},
  //   };
  // }
  // useEffect(() => {
  //   const handleResize = () => {
  //     switch (true) {
  //       case window.innerWidth <= 768:
  //         setItemsPerPage(30);
  //         setShowPagination(false);
  //         break;
  //       case window.innerWidth <= 1024:
  //         setItemsPerPage(20);
  //         setShowPagination(true);
  //         break;
  //       default: {
  //         setItemsPerPage(10);
  //         setShowPagination(true);
  //       }
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const stratIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = stratIndex + itemsPerPage;
  const currentItems = crypta.slice(stratIndex, endIndex);

  const totalPages = Math.ceil(crypta.length / itemsPerPage);

  const handlePage = (page: number) => {
    setcurrentPage(page);
  };
  return { totalPages, showPagination, currentItems, currentPage, handlePage };
};
