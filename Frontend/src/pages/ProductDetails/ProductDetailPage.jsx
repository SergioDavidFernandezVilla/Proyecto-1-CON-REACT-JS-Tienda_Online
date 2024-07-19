//Dependencies
import { useParams, Link } from "react-router-dom";
import { useState, useContext } from "react";

//Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardPayComponent from "../../components/Cards/DetailCard/CardPay/CardPayComponent";
import CardFormsToPayComponent from "../../components/Cards/DetailCard/CardForms/CardFormsToPayComponent";
import GoToBackComponent from "../../components/VolverLink/GoToBackComponent";
import CardsArticleComponent from "../../components/Cards/CardsArticle/CardsArticleComponent";
import StarRatingComponent from "../../components/Cards/StarRating/StartRatingComponent";
import { ModalConfiguracionComponent } from "../../components/ModalConfiguration/ModalConfiguracionComponent";

//Icons
import Star from "../../assets/icons/start_completa.svg";

//JSONs
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";
import FormasPago from "../../services/Jsons/FormasPago";

//Context
import { ContextMenu } from "../../context/MenushopContext/usoContextMenu";

export default function ProductDetailPage() {
  const { slug, categoria } = useParams();

  const GetProduct = [...data1, ...data2, ...data3];

  const [selectProduct, setSelectProduct] = useState(GetProduct); // Usar useState para guardar el producto seleccionado

  const productFilterSelected = selectProduct.find(
    // Filtra por slug
    (product) => product.slug === slug
  );

  const productFilterSelectedByCategory = selectProduct.filter(
    (product) => product.slug !== slug && product.categoria === categoria //Filtra por categoria y que no sea el producto seleccionado
  );

  const ShortProductFilterSelectedByCategory = // Solo muestra 4 productos por categoría
    productFilterSelectedByCategory.slice(0, 4);

  if (!productFilterSelected) {
    return (
      <div>
        <a href="/">Volver a la página principal</a>
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  const {
    isOpenModalConfiguracion,
    setIsOpenModalConfiguracion,
    handleClickModalConfiguracion,
  } = useContext(ContextMenu);

  console.log(productFilterSelectedByCategory);

  return (
    <>
      <HeaderMenuComponent
        isOpenModalConfiguracion={isOpenModalConfiguracion}
        handleClickModalConfiguracion={handleClickModalConfiguracion}
      />
      <div
        key={productFilterSelected.id}
        className="container__product__details"
      >
        <article className="article__product__details">
          <div className="article__product__details__content__div__container">
            <header className="header__product__details">
              <GoToBackComponent />

              <div>
                <Link
                  to={`/products/marca/${productFilterSelected.marca}`}
                  className={
                    "article__product__details__content__div__container__header__marca__link"
                  }
                >
                  <strong className="article__product__details__content__div__container__header__marca__strong">
                    {productFilterSelected.marca}
                  </strong>
                </Link>
              </div>

              <section>
                <h1 className="header__product__details__title__h1">
                  {productFilterSelected.nombre}
                </h1>

                <StarRatingComponent
                  Star={Star}
                  rating={productFilterSelected.rating}
                  Color="rgb(40 113 231)"
                />
              </section>
            </header>

            <figure className="article__product__details__figure">
              <img
                className="article__product__details__figure__img"
                src={productFilterSelected.imagen}
                alt={productFilterSelected.nombre}
              />
            </figure>
          </div>

          <div className="article__product__details__content__div">
            <h4>Detalles acerca de {productFilterSelected.nombre}</h4>
          </div>

          <article className="article__product__details__pay__container">
            <CardPayComponent productFilterSelected={productFilterSelected} />

            <CardFormsToPayComponent FormasPago={FormasPago} />
          </article>

          <section className="section__product__details__group__category">
            <header className="section__product__details__group__category__header">
              <h2 className="section__product__details__group__category__h2">
                Productos de la misma categoría
              </h2>
            </header>

            <div className="container__product__details__group__category">
              {ShortProductFilterSelectedByCategory.map((product) => (
                <CardsArticleComponent
                  key={product.id}
                  product={product}
                  marca={product.marca}
                />
              ))}
            </div>
          </section>
        </article>
      </div>

      {isOpenModalConfiguracion && <ModalConfiguracionComponent />}

      <FooterComponent />
    </>
  );
}
