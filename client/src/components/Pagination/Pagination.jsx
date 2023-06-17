import Button from "../UI/Button";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleClick = (page) => {
    window.scroll({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const handleNext = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5;
    let startPage = currentPage - Math.floor(maxDisplayedPages / 2);
    let endPage = currentPage + Math.floor(maxDisplayedPages / 2);

    if (startPage <= 0) {
      endPage -= startPage - 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      if (endPage - maxDisplayedPages + 1 > 0) {
        startPage = endPage - maxDisplayedPages + 1;
      } else {
        startPage = 1;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <Button
          key={page}
          onClick={() => handleClick(page)}
          className={currentPage === page ? styles.active : ""}
        >
          {page}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul className="pagination">
        <Button onClick={handlePrevious}>Prev</Button>
        {renderPageNumbers()}
        <Button onClick={handleNext}>Next</Button>
      </ul>
    </div>
  );
};

export default Pagination;
