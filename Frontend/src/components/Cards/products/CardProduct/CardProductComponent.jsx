//Dependencies
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

//Icons
import {
  MdLocalGroceryStore,
  MdOutlineFavorite,
  MdFavoriteBorder,
} from "react-icons/md";

//Components
import OptionsCard from "../OptionCard/OptionsCardComponent";

//Context
import { ShoppingCart } from "../../../../context/useContextShopping";

export default function CardProduct({
  id,
  title,
  price,
  image,
  description,
  slug,
  stock,
  marca,
  categoria,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { handleAddToCart } = useContext(ShoppingCart);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickFavorite = (e) => {
    e.preventDefault(); // Prevent link default behavior
    setIsFavorite(!isFavorite);
  };

  const textCheckDescriptionMax =
    description.length > 70
      ? description.slice(0, 86) + ". Ver más..."
      : description;

  // Crear un objeto product con los datos del producto seleccionado
  const product = {
    id,
    title,
    price,
    image,
    description,
    slug,
    stock,
    marca,
    categoria,
  };

  return (
    <article className="card__product_article" key={id}>
      <Link
        to={`/productos/marca/${marca}/categoria/${categoria}/producto/${slug}`}
        className="card__product_article__link__detail"
      >
        <figure className="card__product_article__figure">
          <img
            src={image}
            alt={title}
            width="100%"
            height="200px"
            className="card__product_article__figure__img"
          />
          <OptionsCard handleClick={handleClick} isOpen={isOpen} />
          <div className="card__product_article__figure__div">
            <header className="card__product_article__figure__div__header">
              <h3 className="card__product_article__figure__div__title">
                {title}
              </h3>
              <h4 className="card__product_article__figure__div__price">
                Precio:
                <strong className="card__product_article__figure__div__price__span">
                  ${price} MXN.
                </strong>
              </h4>
              <h4 className="card__product_article__figure__div__price_stock">
                Disponible:
                <strong className="card__product_article__figure__div__price__stock__span">
                  {stock} unidades
                </strong>
              </h4>
            </header>
            <h4
              className="card__product_article__figure__div__description__p"
              style={{ color: "var(--color--secondary)" }}
              maxLength={70}
            >
              {textCheckDescriptionMax}
            </h4>
          </div>
        </figure>
      </Link>
      <footer className="card__product_article__figure__div__footer">
        <button
          className="card__product_article__figure__div__button"
          onClick={() => handleAddToCart(product)}
        >
          <MdLocalGroceryStore className="card__product_article__figure__div__button_compra" />
          Add to cart
        </button>
        <button
          className="card__product_article__figure__div__button__link_me_gusta"
          onClick={handleClickFavorite}
        >
          {isFavorite ? (
            <MdOutlineFavorite className="card__product_article__figure__div__button__link_me_gusta" />
          ) : (
            <MdFavoriteBorder className="card__product_article__figure__div__button__link_me_gusta" />
          )}
        </button>
      </footer>
    </article>
  );
}
