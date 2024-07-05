//Dependencies
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
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

  return (
    <>
      <div className="item__search_menu__open__div" key={id}>
        <Link
          className="item__search_menu__open__div__articulos__link"
          to={`/products/producto/${slug}`}
          onClick={handleClickLink} // Manejar el clic en el enlace
        >
          <MdOutlineSearch className="item__search_menu__open__div__articulos__p__icon" />
          {nombre}
        </Link>
      </div>
    </>
  );
}
