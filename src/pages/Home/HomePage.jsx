//Components
import HeaderMenuComponent from "../../components/Menu/HeaderMenuComponent";
import CardsProductComponent from "../../components/Cards/CardProducts/CardsProductComponent";
import GalleryComponent from "../../components/Cards/Gallery/GalleryComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

// JSONs
import GalleyProductsImagen from "../../services/Jsons/GalleyProductsImagen";
import productsPopularData from "../../services/Jsons/productsPopularData";
import productsImagen from "../../services/Jsons/ProductsImagen";

// Hooks
import { usePagination } from "../../hooks/usePaginationHook"; // Ajusta la ruta según donde coloques el hook

export default function HomePage() {
  const classNameDefault = "container_products_interesantes__carrousel";
  const classNameEdit1 = `${classNameDefault} popular`;

  const {
    currentPage: currentPageProducts,
    nextPage: nextPageProducts,
    prevPage: prevPageProducts,
    goToPage: goToPageProducts,
    startIndex: startIndexProducts,
    endIndex: endIndexProducts,
    totalPages: totalPagesProducts,
    className: classNameProducts,
  } = usePagination(0, 5, productsImagen.length, classNameDefault, "");

  const {
    currentPage: currentPagePopular,
    nextPage: nextPagePopular,
    prevPage: prevPagePopular,
    goToPage: goToPagePopular,
    startIndex: startIndexPopular,
    endIndex: endIndexPopular,
    totalPages: totalPagesPopular,
    className: classNamePopular,
  } = usePagination(
    0,
    5,
    productsPopularData.length,
    classNameDefault,
    "popular"
  );

  return (
    <>
      <HeaderMenuComponent />

      <div className="container__home">
        <div className="container__gallery__products">
          {GalleyProductsImagen.map((product) => (
            <GalleryComponent
              key={product.id}
              imagen={product.imagen}
              title={product.nombre}
              descripcion={product.descripcion}
              estilo={product.estilo}
              rating={product.rating}
              estrellas={product.estrellas}
              slug={product.slug}
              categoria={product.categoria}
              marca={product.marca}
            />
          ))}
        </div>

        <CardsProductComponent
          title={"Productos que podrían gustarte:"}
          jsonAPI={productsImagen.slice(startIndexProducts, endIndexProducts)}
          handleClickPrev={prevPageProducts}
          handleClickNext={nextPageProducts}
          handleClickPage={goToPageProducts}
          currentPage={currentPageProducts}
          classNameCarrousel={classNameProducts}
        />

        <CardsProductComponent
          title={"Productos más populares:"}
          jsonAPI={productsPopularData.slice(
            startIndexPopular,
            endIndexPopular
          )}
          handleClickPrev={prevPagePopular}
          handleClickNext={nextPagePopular}
          handleClickPage={goToPagePopular}
          currentPage={currentPagePopular}
          classNamePopular={classNamePopular}
        />

        <CardsProductComponent
          title={"Productos que podrían gustarte:"}
          jsonAPI={productsImagen.slice(startIndexProducts, endIndexProducts)}
          handleClickPrev={prevPageProducts}
          handleClickNext={nextPageProducts}
          handleClickPage={goToPageProducts}
          currentPage={currentPageProducts}
          classNameCarrousel={classNameProducts}
        />
      </div>

      <FooterComponent />
    </>
  );
}
