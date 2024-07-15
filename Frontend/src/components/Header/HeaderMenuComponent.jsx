//Dependencies
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//Icons
import { MdShoppingCart, MdSettings } from "react-icons/md";
import LogoTienda from "../../assets/images/logo_tienda.jpg";

//Components
import SearchMenuComponent from "../Header/Search/SearchMenu/SearchMenuComponent";

//JSONs
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

//Utils
import { URL_BASE_PRODUCT } from "../../utils/UrlPage";

export default function HeaderMenuComponent() {
  const ArrayProducts = [...data1, ...data2, ...data3];
  const [data, setData] = useState(ArrayProducts);

  const { slug, categoria } = useParams();
  const navigate = useNavigate();

  console.log(categoria);

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

          <li className="header1__menu__nav__list__item_li">
            <Link to="/cart" className="header1__menu__nav__list__item__link">
              <MdShoppingCart className="header1__menu__nav__list__item__link__icon" />
              Cart
            </Link>
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
