// Dependencies
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Utils
import {
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_PAGE,
} from "../../utils/UrlPage";

const usePaginationProductsHook = ({ totalItems, itemsPerPage }) => {
  const { id, categoria } = useParams(); // Obtener parámetros dinámicos
  const navigate = useNavigate();

  const URL = `${URL_PRODUCTS}${URL_PRODUCTS_CATEGORY}`;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [totalItems, itemsPerPage]);

  useEffect(() => {
    if (id) {
      const idPage = parseInt(id, 10);
      if (!isNaN(idPage) && idPage > 0 && idPage <= totalPages) {
        setCurrentPage(idPage);
      }
    }
  }, [id, totalPages]);

  useEffect(() => {
    if (currentPage > 0 && currentPage <= totalPages) {
      const dynamicURL = `${URL_PRODUCTS}/categoria/${
        categoria || "all"
      }${URL_PRODUCTS_PAGE}${currentPage}`;
      navigate(dynamicURL, { replace: true });
    }
  }, [currentPage, navigate, categoria, totalPages]);

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
