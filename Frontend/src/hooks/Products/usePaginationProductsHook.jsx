//Dependencies
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const usePaginationProductsHook = ({ totalItems, itemsPerPage }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const URL = "/productos/page/";

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
    navigate(`${URL}${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

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
