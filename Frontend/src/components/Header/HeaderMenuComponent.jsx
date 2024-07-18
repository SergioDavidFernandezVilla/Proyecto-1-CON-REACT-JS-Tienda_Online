//Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";

//Logo Assets
import LogoTienda from "../../assets/images/logo_tienda.jpg";

//Components
import SearchMenuComponent from "../Header/Search/SearchMenu/SearchMenuComponent";
import { HeaderOptionsComponent } from "../Header/HeaderOptions/HeaderOptionsComponent";
import { OtherOptionsComponent } from "../Header/OtherOption/OtherOptionComponent";

//Jsons
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

export default function HeaderMenuComponent() {
  const ArrayProducts = [...data1, ...data2, ...data3];
  const [data, setData] = useState(ArrayProducts);

  return (
    <>
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
          <OtherOptionsComponent />
        </nav>
      </header>

      <HeaderOptionsComponent />
    </>
  );
}
