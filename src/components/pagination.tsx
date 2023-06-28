type PaginationProps = {
  onPaginate: (page: number) => void;
  numberOfPages: number;
  activePage: number;
};

const Pagination = ({
  onPaginate,
  numberOfPages,
  activePage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <span
        onClick={() => onPaginate(activePage + 1)}
        className={`pagination__item ${
          activePage <= numberOfPages ? "isDisabled" : ""
        }`}
      ></span>
      {Array(numberOfPages)
        .fill("")
        .map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onPaginate(activePage + 1)}
              className={`pagination__item ${
                activePage === index + 1 ? "isActive" : ""
              }`}
            >
              {index + 1}
            </span>
          );
        })}
      <span
        onClick={() => onPaginate(activePage + 1)}
        className={`pagination__item ${
          activePage >= numberOfPages ? "isDisabled" : ""
        }`}
      ></span>
    </div>
  );
};

export default Pagination;
