//Dependencies
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Icons
import { MdShoppingCart, MdSettings, MdShoppingBasket } from "react-icons/md";

//Logo Assets
import LogoTienda from "../../assets/images/logo_tienda.jpg";

//Components
import SearchMenuComponent from "../Header/Search/SearchMenu/SearchMenuComponent";
import { ShopCardComponet } from "../ShopCard/ShopCardComponent";

//Jsons
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

//Utils
import { URL_BASE_PRODUCT } from "../../utils/UrlPage";

//Context
import { ShoppingCart } from "../../context/useContextShopping";

export default function HeaderMenuComponent() {
  const ArrayProducts = [...data1, ...data2, ...data3];
  const [data, setData] = useState(ArrayProducts);
  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  const { cart, newCart, totalCart, setTotalCart } = useContext(ShoppingCart);

  const handleClickShopCart = () => {
    setIsOpenShopCart(!isOpenShopCart);
  };

  const TamañoPrecio = newCart.length;
  const MaxCard = newCart.slice(0, 5);

  useEffect(() => {
    const totalCart = newCart.reduce((acc, product) => acc + product.price, 0);
    setTotalCart(totalCart);
  }, [newCart, totalCart]);

  const MenuShortCart = () => {
    return (
      // Menu Carrito
      <div className="container__menu__short__cart">
        <div className="container__menu__short__cart__content">
          <header className="container__menu__short__cart__content__header">
            <h4 className="container__menu__short__cart__content__header__h4">
              <strong>Tu carrito tiene {TamañoPrecio} productos.</strong>
            </h4>

            <p className="container__menu__short__cart__content__header__p">
              Costo total: <strong>${totalCart} MXN</strong>
            </p>
          </header>

          <article className="article__cart__container__contents">
            {ListaShop}

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

  const ListaShop = MaxCard.map((product) => (
    <ShopCardComponet product={product} key={product.id} />
  ));

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

        <SearchMenuComponent data={data} />

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
              className="header1__menu__nav__list__item__link"
              onClick={handleClickShopCart}
            >
              <MdShoppingCart
                className={`header1__menu__nav__list__item__link__icon`}
              />
              Cart
            </Link>

            {isOpenShopCart && <MenuShortCart />}
          </li>

          <li className="header1__menu__nav__list__item_li">
            <Link
              to="/configuracion"
              className="header1__menu__nav__list__item__link"
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
