import "./pagination.styles.scss";

export const Pagination = ({
  totalPages,
  currentPage,
  handlePage,
}: {
  totalPages: number;
  currentPage: number;
  handlePage: (page: number) => void;
}) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
