//Icons
import { MdOutlineSearch } from "react-icons/md";

//Dependencies
import { Link, useParams, useNavigate } from "react-router-dom";

//Utils
import { URL_PRODUCTS_SLUG } from "../../../../../utils/UrlPage";

export default function ResultSearchComponent({
  id,
  nombre,
  slug,
  handleClickClearSearch,
  handleClickStop,
}) {
  const handleClickLink = (e) => {
    // Detener la propagación del evento para evitar que se propague al contenedor principal
    e.stopPropagation();
    // Llamar a la función para limpiar la búsqueda, si es necesario
    handleClickClearSearch();
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="item__search_menu__open__div" key={id}>
        <Link
          className="item__search_menu__open__div__articulos__link"
          to={`/productos/filter/query/${slug}/page/1`}
          onClick={handleClickLink} // Manejar el clic en el enlace
        >
          <MdOutlineSearch className="item__search_menu__open__div__articulos__p__icon" />
          {nombre}
        </Link>
      </div>
    </>
  );
}
