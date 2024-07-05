//Dependencies
import { Link } from "react-router-dom";

//Icons
import {
  MdArrowCircleRight,
  MdArrowCircleLeft,
  MdArrowForward,
} from "react-icons/md";

//Components
import CardProduct from "../products/CardProduct/CardProductComponent";

export default function CardsProductComponent({
  title,
  jsonAPI,
  handleClickPrev,
  handleClickNext,
  handleClickPage,
  currentPage,
  isOpen,
  classNameCarrousel,
  classNamePopular,
}) {
  return (
    <div className={`container_products_interesantes`}>
      <div className="container__home__products">
        <header className="home__products__container__header">
          <h4 className="home__products__container__header__title_h4">
            {title}
          </h4>

          <Link
            className="home__products__container__header__link"
            to="/products"
          >
            Ver todos los productos disponibles{" "}
            <MdArrowForward className="home__products__container__header__link__icon" />
          </Link>
        </header>

        <div className="container__carousel__products__div">
          <Link className="link__carousel__arrows" onClick={handleClickPrev}>
            <MdArrowCircleLeft className="icon__carousel__arrows" />
          </Link>

          <section
            className={classNamePopular ? classNamePopular : classNameCarrousel}
          >
            {jsonAPI.map((product) => (
              <CardProduct
                key={product.id}
                title={product.nombre}
                price={product.precio}
                image={product.imagen}
                description={product.descripcion}
                slug={product.slug}
                stock={product.stock}
                marca={product.marca}
                categoria={product.categoria}
              />
            ))}
          </section>

          <Link className="link__carousel__arrows" onClick={handleClickNext}>
            <MdArrowCircleRight className="icon__carousel__arrows" />
          </Link>
        </div>
      </div>
    </div>
  );
}
