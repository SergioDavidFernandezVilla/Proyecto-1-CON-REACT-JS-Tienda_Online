// Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MenuFiltersProductsComponent from "../../components/Menu/FilterProducts/MenuFiltersProducts/MenuFiltersProductsComponent";
import CardsArticleComponent from "../../components/Cards/CardsArticle/CardsArticleComponent";
import NavPaginationComponent from "../../components/Pagination/NavPaginationComponent";

// Icons
import { MdAutoAwesomeMotion } from "react-icons/md";

// JSONs
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

// Dependencies
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Hooks
import usePaginationProductsHook from "../../hooks/Products/usePaginationProductsHook";

export default function ProductsPage() {
  const allProducts = [...data1, ...data2, ...data3];

  const [filterProducts, setFilterProducts] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    handleClickAumentPage,
    handleClickAumentPagePrevious,
  } = usePaginationProductsHook({
    totalItems: allProducts.length,
    itemsPerPage: 10,
  });

  useEffect(() => {
    setFilterProducts(allProducts.slice(startIndex, endIndex));
    setPageNumbers([...Array(totalPages).keys()].map((num) => num + 1));
  }, [currentPage, startIndex, endIndex, totalPages]);

  return (
    <>
      <HeaderMenuComponent />
      <div className="container__products__filter__page">
        <MenuFiltersProductsComponent />

        <main>
          <section className="section__products__filter__page">
            <header className="section__products__filter__page__header">
              <h2 className="section__products__filter__page__h2">Productos</h2>

              <button className="section__products__filter__page__button">
                <Link
                  to="/products/categoria/all"
                  className="section__products__filter__page__button__link"
                >
                  <MdAutoAwesomeMotion className="section__products__filter__page__button__link__icon" />
                  productos que estan en oferta
                </Link>
              </button>
            </header>

            <div className="container__articles__products__filter__page">
              {filterProducts.map((product, index) => (
                <CardsArticleComponent
                  key={product.id}
                  product={product}
                  index={index}
                  marca={product.marca}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <NavPaginationComponent
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        handleClickAumentPage={handleClickAumentPage}
        handleClickAumentPagePrevious={handleClickAumentPagePrevious}
      />

      <FooterComponent />
    </>
  );
}
