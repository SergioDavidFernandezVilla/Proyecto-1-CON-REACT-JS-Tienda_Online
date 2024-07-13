import { useState } from "react";

export function usePagination(
  initialPage,
  itemsPerPage,
  totalItems,
  baseClassName,
  carouselType, // Nuevo parámetro para identificar el tipo de carrusel
  etiqueta // Nueva prop para comparación de etiqueta
) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const nextPage = () => {
    if (etiqueta === etiqueta) {
      // Comprueba la condición de etiqueta
      setCurrentPage((prevPage) =>
        prevPage < totalPages - 1 ? prevPage + 1 : prevPage
      );
    }
  };

  const prevPage = () => {
    if (etiqueta === etiqueta) {
      // Comprueba la condición de etiqueta
      setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    }
  };

  const goToPage = (page) => setCurrentPage(page);

  // Generar la clase base y añadir __closed cuando esté en la página inicial
  const baseClass = `${baseClassName}${
    carouselType ? `__${carouselType}` : ""
  }`;
  const className =
    currentPage === initialPage
      ? `${baseClass}__closed`
      : `${baseClass}__active`;

  // Return the pagination state and functions
  return {
    currentPage,
    startIndex,
    endIndex,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    className,
  };
}
