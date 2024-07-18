//Dependencies
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Icons
import { MdShoppingCart, MdSettings } from "react-icons/md";

//Logo Assets
import LogoTienda from "../../assets/images/logo_tienda.jpg";

//Components
import SearchMenuComponent from "../Header/Search/SearchMenu/SearchMenuComponent";
import { MenuShopCards } from "../ShopCard/MenuShopCards/MenuShopCards";

//Jsons
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

//Utils
import { URL_BASE_PRODUCT } from "../../utils/UrlPage";

//Context
import { ShoppingCart } from "../../context/useContextShopping";

export default function HeaderMenuComponent({
  isOpenModalConfiguracion,
  handleClickModalConfiguracion,
}) {
  const ArrayProducts = [...data1, ...data2, ...data3];
  const [data, setData] = useState(ArrayProducts);
  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  const { cart, newCart, totalCart, setTotalCart, cantidad, setCantidad } =
    useContext(ShoppingCart);

  const handleClickShopCart = () => {
    setIsOpenShopCart(!isOpenShopCart);
  };

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
    <header className="header1__menu">
      <nav className="header1__menu__nav">
        <Link to="/" className="header1__menu__nav__logo">
          <figure className="header1__menu__nav__logo__figure">
            <img
              src={LogoTienda}
              alt="Logo Tienda"
              className="header1__menu__nav__logo__figure__img"
            />
          </figure>

          <span className="header1__menu__nav__logo__text">
            Tienda de Productos
          </span>
        </Link>
        <SearchMenuComponent data={data} /> {/* Componente de búsqueda */}
        <ul className="header1__menu__nav__list_ul">
          <li className="header1__menu__nav__list__item_li">
            <Link to="/" className="header1__menu__nav__list__item__link">
              Home
            </Link>
          </li>
          <li className="header1__menu__nav__list__item_li">
            <Link
              to={`${URL_BASE_PRODUCT}`}
              className="header1__menu__nav__list__item__link"
            >
              Products
            </Link>
          </li>

          <li
            className={`header1__menu__nav__list__item_li ${
              isOpenShopCart ? "active" : ""
            }`}
          >
            <Link
              className="header1__menu__nav__list__item__link shopping__cart__link"
              onClick={handleClickShopCart}
            >
              {cantidad > 0 ? (
                <span className="span__cart__count">{cantidad}</span>
              ) : null}
              <MdShoppingCart
                className={`header1__menu__nav__list__item__link__icon`}
              />
              Cart
            </Link>

            {isOpenShopCart && <MenuShopCards />}
          </li>

          <li className="header1__menu__nav__list__item_li">
            <Link
              className="header1__menu__nav__list__item__link"
              onClick={() => handleClickModalConfiguracion()}
            >
              <MdSettings className="header1__menu__nav__list__item__link__icon" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
