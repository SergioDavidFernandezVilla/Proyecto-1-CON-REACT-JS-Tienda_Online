//Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";

// JSONs
import data1 from "../../services/Jsons/productsPopularData";
import data2 from "../../services/Jsons/ProductsImagen";
import data3 from "../../services/Jsons/GalleyProductsImagen";

//Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import Imagen404 from "../../assets/icons/404/error_404.svg";

export default function NotFoundPage() {
  const ArrayProducts = [...data1, ...data2, ...data3];
  const [data, setData] = useState(ArrayProducts);

  return (
    <>
      <HeaderMenuComponent data={data} />

      <div className="container__404__page">
        <figure className="container__404__page__figure">
          <img
            src={Imagen404}
            alt="Error 404"
            className="container__404__page__figure__img"
          />
          <figcaption className="container__404__page__figure__figcaption">
            <h1 className="container__404__page__figure__figcaption__h1">
              Página no encontrada
            </h1>
            <Link
              to="/"
              className="container__404__page__figure__figcaption__link"
              alt="https://www.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_7906236.htm#query=error%20404%20svg&position=26&from_view=keyword&track=ais_user&uuid=38e68634-c08a-406f-9022-b1f2f0609f6a"
            >
              <h2 className="container__404__page__figure__figcaption__h2">
                Volver a la página principal
              </h2>
            </Link>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
