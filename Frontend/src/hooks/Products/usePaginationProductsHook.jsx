// Dependencies
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Utils
import { URL_PRODUCTS_QUERY } from "../../utils/UrlPage";

// Context
import { ProductsFilterContext } from "../../context/useContextProductsFilter";

const usePaginationProductsHook = ({ totalItems, itemsPerPage }) => {
  const { page, categoria } = useParams();
  const navigate = useNavigate();

  const { searchQuery, setSearchQuery, totalPages, setTotalPages } = useContext(
    ProductsFilterContext
  );

  const [currentPage, setCurrentPage] = useState(() => {
    const pageNumber = parseInt(page, 10);
    return !isNaN(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  });

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [totalItems, itemsPerPage]);

  useEffect(() => {
    const pageNumber = parseInt(page, 10);
    if (
      !isNaN(pageNumber) &&
      pageNumber > 0 &&
      pageNumber <= totalPages &&
      pageNumber !== currentPage
    ) {
      setCurrentPage(pageNumber);
    }
  }, [page, totalPages, currentPage]);

  useEffect(() => {
    const dynamicURL = `${URL_PRODUCTS_QUERY}/${categoria}/page/${currentPage}`;
    navigate(dynamicURL, { replace: true });
  }, [currentPage, navigate, categoria]);

  const handleClickAumentPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickAumentPagePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex: (currentPage - 1) * itemsPerPage,
    endIndex: currentPage * itemsPerPage,
    handleClickAumentPage,
    handleClickAumentPagePrevious,
  };
};

export default usePaginationProductsHook;
