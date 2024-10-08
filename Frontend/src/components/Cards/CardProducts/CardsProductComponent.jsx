//Dependencies
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//Icons
import {
  MdArrowCircleRight,
  MdArrowCircleLeft,
  MdArrowForward,
} from "react-icons/md";

//Components
import CardProduct from "../products/CardProduct/CardProductComponent";
import { usePagination } from "../../../hooks/CardsCarrousel/usePaginationHook";

export default function CardsProductComponent({
  title,
  jsonAPI,
  id,
  etiqueta,
}) {
  const [TamañoCard, setTamañoCard] = useState(5);
  const [TamañoWidth, setTamañoWidth] = useState(0);

  const laptop = 1024;
  const desktop = 1600;
  const tablet = 768;
  const mobile = 480;

  useEffect(() => {
    const TamañoWidth = window.innerWidth; // Obtener el ancho de la ventana del navegador
    setTamañoWidth(TamañoWidth);

    if (TamañoWidth < laptop) {
      setTamañoCard(2);
    } else if (TamañoWidth < desktop) {
      setTamañoCard(3);
    } else if (TamañoWidth < tablet) {
      setTamañoCard(4);
    } else if (TamañoWidth < mobile) {
      setTamañoCard(1);
    }

    console.log("TamañoWidth", TamañoWidth);
  }, [TamañoWidth]);

  const { nextPage, prevPage, startIndex, endIndex, className } = usePagination(
    0,
    TamañoCard, // Cantidad de elementos por página
    jsonAPI.length,
    etiqueta
  ); // Mostrar 5 elementos por página

  const [active, setActive] = useState(false);

  const handleNextClick = () => {
    setActive(true);
    nextPage(); // Llama a la función de paginación para el siguiente
  };

  const handlePrevClick = () => {
    setActive(false);
    prevPage(); // Llama a la función de paginación para el anterior
  };

  return (
    <div className="container_products_interesantes">
      <div className="container__home__products">
        <header className="home__products__container__header">
          <h4 className="home__products__container__header__title_h4">
            {title}
          </h4>
          <Link
            className="home__products__container__header__link"
            to="/productos/filter/query/all/page/1"
          >
            Ver todos los productos disponibles{" "}
            <MdArrowForward className="home__products__container__header__link__icon" />
          </Link>
        </header>

        <div className="container__carousel__products__div">
          <Link className="link__carousel__arrows" onClick={handlePrevClick}>
            <MdArrowCircleLeft className="icon__carousel__arrows" />
          </Link>

          <section
            className={`container__carrousel ${
              active ? "active" : "defaultPrev"
            }`}
          >
            {jsonAPI.slice(startIndex, endIndex).map((product) => (
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
                id={product.id}
              />
            ))}
          </section>

          <Link className="link__carousel__arrows" onClick={handleNextClick}>
            <MdArrowCircleRight className="icon__carousel__arrows" />
          </Link>
        </div>
      </div>
    </div>
  );
}
