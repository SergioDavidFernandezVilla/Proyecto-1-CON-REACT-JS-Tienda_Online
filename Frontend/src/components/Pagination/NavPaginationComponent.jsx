// Dependencies
import { Link, useNavigate, useParams } from "react-router-dom";

// Utils
import {
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_PAGE,
} from "../../utils/UrlPage";

export default function NavPaginationComponent({
  totalPages,
  currentPage,
  setCurrentPage,
  pageNumbers,
  handleClickAumentPage,
  handleClickAumentPagePrevious,
}) {
  const navigate = useNavigate();
  const { categoria } = useParams();

  const URL = `${URL_PRODUCTS}${URL_PRODUCTS_CATEGORY}/${categoria}${URL_PRODUCTS_PAGE}`;

  return (
    <nav className="container__products__filter__page__nav">
      <div className="container__products__filter__page__nav__div">
        {totalPages >= currentPage ? (
          <div className="container__products__filter__page__nav__div__pagination">
            <button className="container__products__filter__page__nav__div__pagination__button">
              <Link
                className="container__products__filter__page__nav__div__pagination__button__Link"
                to={`${URL}${currentPage - 1}`}
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
                    to={`${URL}${pageNum}`}
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
                to={`${URL}${currentPage + 1}`}
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
