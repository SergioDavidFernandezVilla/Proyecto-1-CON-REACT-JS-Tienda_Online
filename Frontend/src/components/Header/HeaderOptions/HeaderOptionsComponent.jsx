//Utils
import { URL_BASE_PRODUCT } from "../../../utils/UrlPage";

//Components
import { MenuShopCards } from "../../ShopCard/MenuShopCards/MenuShopCards";

//Icons
import { MdShoppingCart, MdSettings } from "react-icons/md";

//Dependencies
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Context
import { ShoppingCart } from "../../../context/shoppingContext/useContextShopping";
import { ContextMenu } from "../../../context/MenushopContext/usoContextMenu";

export const HeaderOptionsComponent = () => {
  const {
    isOpenShopCart,
    setIsOpenShopCart,
    handleClickShopCart,
    handleClickModalConfiguracion,
    setIsOpenModalConfiguracion,
  } = useContext(ContextMenu);

  const { cart, newCart, totalCart, setTotalCart, cantidad, setCantidad } =
    useContext(ShoppingCart);

  useEffect(() => {
    // Calcular el total del carrito cada vez que cambie la cantidad del producto seleccionado
    const total = newCart.reduce((acc, product) => {
      const quantity = product.quantity || 1;
      return acc + product.price * quantity;
    }, 0);

    setTotalCart(total); // Actualizar el total del carrito

    const totalCantidad = newCart.reduce(
      (acc, product) => acc + (product.quantity || 1),
      0
    );
    setCantidad(totalCantidad); // Actualizar el estado de la cantidad del carrito
  }, [newCart]); // Utilizar la cantidad actual del carrito para calcular el total

  return (
    <header className="header__menu__nav__opciones">
      <nav className="header__menu__nav__opciones__nav">
        <ul className="header__menu__nav__opciones__nav__list_ul">
          <li className="header__menu__nav__opciones__nav__list__item_li">
            <Link
              to="/"
              className="link__menu__nav__opciones__nav__list__item__link"
            >
              Home
            </Link>
          </li>
          <li className="header__menu__nav__opciones__nav__list__item_li">
            <Link
              to={`${URL_BASE_PRODUCT}`}
              className="link__menu__nav__opciones__nav__list__item__link"
            >
              Productos
            </Link>
          </li>

          <li
            className={`header__menu__nav__opciones__nav__list__item_li ${
              isOpenShopCart ? "active" : ""
            }`}
          >
            <Link
              className="link__menu__nav__opciones__nav__list__item__link shopping__cart__link"
              onClick={handleClickShopCart}
            >
              {cantidad > 0 ? (
                <span className="span__cart__count">{cantidad}</span>
              ) : null}
              <MdShoppingCart
                className={`icon__menu__nav__opciones__nav__list__item__link`}
              />
              Cart
            </Link>

            {isOpenShopCart && <MenuShopCards />}
          </li>

          <li className="header__menu__nav__opciones__nav__list__item_li">
            <Link
              className="link__menu__nav__opciones__nav__list__item__link"
              onClick={() => handleClickModalConfiguracion()}
            >
              <MdSettings className="icon__menu__nav__opciones__nav__list__item__link" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
