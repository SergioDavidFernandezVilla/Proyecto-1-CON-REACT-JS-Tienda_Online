// Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MenuFiltersProductsComponent from "../../components/Menu/FilterProducts/MenuFiltersProducts/MenuFiltersProductsComponent";
import CardsArticleComponent from "../../components/Cards/CardsArticle/CardsArticleComponent";
import NavPaginationComponent from "../../components/Pagination/NavPaginationComponent";
import { ModalConfiguracionComponent } from "../../components/ModalConfiguration/ModalConfiguracionComponent";

// Icons
import { MdAutoAwesomeMotion } from "react-icons/md";

// JSONs
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

// Dependencies
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

// Context
import { ProductsFilterContext } from "../../context/useContextProductsFilter";

// Hooks
import usePaginationProductsHook from "../../hooks/Products/usePaginationProductsHook";
import useModalConfigHook from "../../hooks/ModalConfig/usoModalConfigHook";

//Context
import { ContextMenu } from "../../context/MenushopContext/useContextMenu";

export default function ProductsPage() {
  const allProducts = [...data1, ...data2, ...data3];

  const [filterProducts, setFilterProducts] = useState(allProducts);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [searchQueryText, setSearchQueryText] = useState("");

  const { categoria } = useParams();
  const { searchQuery, setSearchQuery, setTotalPages } = useContext(
    ProductsFilterContext
  );

  const Nombre = categoria.replaceAll("-", " ");

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    handleClickAumentPage,
    handleClickAumentPagePrevious,
  } = usePaginationProductsHook({
    totalItems: filterProducts.length,
    itemsPerPage: 10,
  });

  useEffect(() => {
    let filteredProducts = allProducts;

    if (Nombre !== "all") {
      filteredProducts = filteredProducts.filter((product) =>
        product.nombre.toLowerCase().includes(Nombre.toLowerCase())
      );
    }

    if (searchQuery !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilterProducts(filteredProducts.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(filteredProducts.length / 10));
    setPageNumbers([...Array(totalPages).keys()].map((num) => num + 1));
  }, [currentPage, startIndex, endIndex, searchQuery, Nombre, totalPages]);

  useEffect(() => {
    if (searchQuery !== "" && Nombre === "all") {
      setSearchQuery(searchQuery);
    }

    if (filterProducts.length === 0) {
      setSearchQueryText("No se encontraron resultados");
    }
  }, [searchQuery, Nombre, searchQueryText]);

  const MostrarMas = filterProducts.length <= 5;
  const LikeProducts = allProducts.slice(0, 4);

  console.log("filterProducts", filterProducts);
  console.log("searchQuery", searchQuery);

  const {
    isOpenModalConfiguracion,
    setIsOpenModalConfiguracion,
    handleClickModalConfiguracion,
  } = useContext(ContextMenu);

  return (
    <>
      <HeaderMenuComponent />
      <div className="container__products__filter__page">
        <MenuFiltersProductsComponent />

        <main>
          <section className="section__products__filter__page">
            <header className="section__products__filter__page__header">
              <h2 className="section__products__filter__page__h2">
                Resultados de la búsqueda: <strong>{searchQuery}</strong>
              </h2>

              <button className="section__products__filter__page__button">
                <Link
                  to="/products/categoria/all"
                  className="section__products__filter__page__button__link"
                >
                  <MdAutoAwesomeMotion className="section__products__filter__page__button__link__icon" />
                  productos que están en oferta
                </Link>
              </button>
            </header>

            <div className="container__articles__products__filter__page">
              {filterProducts.map((product) => (
                <CardsArticleComponent key={product.id} product={product} />
              ))}

              {MostrarMas && (
                <>
                  <header>
                    <h2 className="section__products__filter__page__h2">
                      Productos que podrían gustarte:
                    </h2>
                  </header>
                  {LikeProducts.map((product) => (
                    <CardsArticleComponent key={product.id} product={product} />
                  ))}
                </>
              )}
            </div>
          </section>
        </main>
      </div>

      {isOpenModalConfiguracion && (
        <ModalConfiguracionComponent
          handleClickModalConfiguracion={handleClickModalConfiguracion}
        />
      )}

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
