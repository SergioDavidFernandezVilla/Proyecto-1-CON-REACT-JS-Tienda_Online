//Dependencies
import { Link } from "react-router-dom";

//Components
import StarRatingComponent from "../StarRating/StartRatingComponent";

//Icons
import Star from "../../../assets/icons/start_completa.svg";

export default function CardsArticleComponent({ product }) {
  return (
    <article className="article__product__details__group__category">
      <Link
        to={`/productos/marca/${product.marca}/categoria/${product.categoria}/producto/${product.slug}`}
        className="link__product__details__group__category"
      >
        <header className="article__product__details__group__category__header">
          <div className="article__product__details__group__category__header__text">
            <h3 className="article__product__details__group__category__h3">
              <strong>{product.nombre}</strong>
            </h3>
            <p className="article__product__details__group__category__p">
              {product.descripcion}
            </p>
          </div>

          <StarRatingComponent
            Star={Star}
            rating={product.rating}
            Color="rgb(40 113 231)"
          />
        </header>

        <figure className="article__product__details__group__category__figure">
          <img
            className="article__product__details__group__category__figure__img"
            width={300}
            src={product.imagen}
            alt={product.nombre}
          />
        </figure>
      </Link>
    </article>
  );
}
