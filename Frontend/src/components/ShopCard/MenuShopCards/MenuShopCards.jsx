//Dependencies
import { Link } from "react-router-dom";
import { useContext } from "react";

//Context
import { ShoppingCart } from "../../../context/shoppingContext/useContextShopping";

//Icons
import { MdShoppingCart, MdShoppingBasket } from "react-icons/md";

//Components
import { ShopCardComponent } from "../ShopCardComponent";

export const MenuShopCards = () => {
  const { newCart, totalCart, cantidad } = useContext(ShoppingCart);

  const TamañoPrecio = newCart.length;
  const MaxCard = newCart.slice(0, 5);

  return (
    // Menu Carrito
    <div className="container__menu__short__cart">
      <div className="container__menu__short__cart__content">
        <header className="container__menu__short__cart__content__header">
          <h4 className="container__menu__short__cart__content__header__h4">
            <strong>Tu carrito tiene {TamañoPrecio} productos.</strong>
          </h4>

          <p className="container__menu__short__cart__content__header__p">
            Costo total: <strong>${totalCart} MXN</strong> / {cantidad} unidades
          </p>
        </header>

        <article className="article__cart__container__contents">
          {MaxCard.map((product) => (
            <ShopCardComponent product={product} key={product.id} />
          ))}

          <footer className="footer__cart__container__contents__buttons">
            <button className="button__cart__container__contents__1">
              <MdShoppingCart className="container__menu__short__cart__content__button__icon" />
              Comprar Ahora
            </button>

            <Link to="/cart" className="button__cart__container__contents__2">
              <MdShoppingBasket className="container__menu__short__cart__content__button__icon" />
              Ver carrito
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
};
