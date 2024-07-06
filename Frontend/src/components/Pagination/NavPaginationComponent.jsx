// Dependencies
import { Link } from "react-router-dom";

//Utils
import { URLProductos } from "../../utils/UrlPage";

export default function NavPaginationComponent({
  totalPages,
  currentPage,
  setCurrentPage,
  pageNumbers,
  handleClickAumentPage,
  handleClickAumentPagePrevious,
}) {
  return (
    <nav className="container__products__filter__page__nav">
      <div className="container__products__filter__page__nav__div">
        {totalPages >= currentPage ? (
          <div className="container__products__filter__page__nav__div__pagination">
            <button className="container__products__filter__page__nav__div__pagination__button">
              <Link
                className="container__products__filter__page__nav__div__pagination__button__Link"
                to={`${URLProductos}${currentPage - 1}`}
                onClick={handleClickAumentPagePrevious}
              >
                Anterior
              </Link>
            </button>

            <ul className="container__products__filter__page__nav__div__pagination__ul">
              {pageNumbers.map((pageNum) => (
                <li
                  key={pageNum}
                  className={`container__products__filter__page__nav__div__pagination__li ${
                    currentPage === pageNum ? "active" : "disabled"
                  }`}
                >
                  <Link
                    className={`container__products__filter__page__nav__div__pagination__link ${
                      currentPage === pageNum ? "active" : "disabled"
                    }`}
                    to={`${URLProductos}${pageNum}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="container__products__filter__page__nav__div__pagination__button">
              <Link
                className="container__products__filter__page__nav__div__pagination__button__Link"
                to={`${URLProductos}${currentPage + 1}`}
                onClick={handleClickAumentPage}
              >
                Siguiente
              </Link>
            </button>
          </div>
        ) : (
          <p>No hay más productos</p>
        )}
      </div>
    </nav>
  );
}
