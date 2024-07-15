//Icons
import { MdOutlineSearch } from "react-icons/md";

//Dependencies
import { useState, useEffect, useRef, useContext } from "react";

//Components
import OptionsFilterMenu from "../OptionFilterMenu/OptionsFilterMenuComponent";
import ResultsSearchMenu from "../Results/ResultsSearch/ResultsSearchMenuComponent";

//Context
import { ProductsFilterContext } from "../../../../context/useContextProductsFilter";

//JSONs
import data from "../../../../services/Jsons/productsPopularData";
import data2 from "../../../../services/Jsons/ProductsImagen";

export default function SearchMenuComponent() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [results, setResults] = useState([]);

  const { searchQuery, setSearchQuery } = useContext(ProductsFilterContext);

  const searchInputRef = useRef(null);

  const ContenedorResultsSearchRef = useRef(null);

  // Expresión regular que permite letras, números y espacios en blanco
  const pattern = /^[a-zA-Z0-9\s]*$/;

  // Expresión regular para eliminar caracteres no permitidos
  const patterIlegal = /[^a-zA-Z0-9\s]/g;

  useEffect(() => {
    function handleClickOutside(event) {
      // Verificar si se hizo clic fuera del input y del contenedor de resultados
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        ContenedorResultsSearchRef.current &&
        !ContenedorResultsSearchRef.current.contains(event.target)
      ) {
        setIsOpenSearch(false); // Cerrar resultados de búsqueda si se hace clic fuera
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ContenedorResultsSearchRef]);

  const handleChangeSearch = (e) => {
    let searchText = e.target.value; // Eliminar espacios en blanco al principio y al final
    let searchTextClean = searchText.replace(patterIlegal, ""); // Eliminar caracteres no permitidos

    // Verificar si el texto contiene patrones específicos que deseas eliminar
    const forbiddenPatterns = /(SELECT\s?\*?\s?FROM|<|\/)/gi;

    if (
      searchTextClean.length >= 3 &&
      searchTextClean.length <= 100 &&
      pattern.test(searchTextClean) && // Validar el texto limpio
      !forbiddenPatterns.test(searchText) // Verificar si no hay patrones no permitidos en el texto original
    ) {
      setSearchQuery(searchTextClean); // Actualizar el estado de query con el texto limpio
      setIsOpenSearch(true);
      search(searchTextClean); // Realizar la búsqueda con el texto limpio
    } else {
      setSearchQuery(searchTextClean); // Actualizar el estado de query con el texto limpio
      setIsOpenSearch(false);
      setResults([]); // Limpiar los resultados si el texto no es válido
    }
  };

  const search = (text) => {
    const results1 = data
      .filter((product) =>
        product.nombre.toLowerCase().includes(text.toLowerCase())
      )
      .slice(0, 4); // Limitar resultados de data a 4 productos

    const results2 = data2
      .filter((product) =>
        product.nombre.toLowerCase().includes(text.toLowerCase())
      )
      .slice(0, 3); // Limitar resultados de data2 a 3 productos

    // Concatenar los resultados de ambos conjuntos de datos
    const combinedResults = [...results1, ...results2];

    setResults(combinedResults); // Actualizar los resultados de búsqueda combinados
  };

  const handleOptionClick = (e) => {
    e.preventDefault();
    setIsOptionOpen(!isOptionOpen);
  };

  const handleClickClearSearch = () => {
    setSearchQuery("");
    setIsOpenSearch(false);
    setResults([]);
  };

  const handleClickStop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container__search_menu__nav__div">
      <form className="header1__menu__nav__form" name="form__search">
        <div className="header1__menu__nav__form__div">
          <button
            className="header1__menu__nav__form__div__button_search"
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          >
            <MdOutlineSearch className="header1__menu__nav__form__div__button__search__icon" />
          </button>
          <input
            name="form__search__input"
            ref={searchInputRef}
            type="search"
            placeholder="Buscar productos...."
            className="header1__menu__nav__form__div__input"
            value={searchQuery}
            onChange={handleChangeSearch}
            minLength={3}
            maxLength={100}
            pattern={pattern.source} // Asignar la expresión regular como string al pattern
          />

          <button
            className="header1__menu__nav__form__div__button"
            onClick={handleOptionClick}
          >
            Filtrar
          </button>

          {!isOpenSearch && isOptionOpen && <OptionsFilterMenu />}

          {isOpenSearch && (
            <ResultsSearchMenu
              data={results}
              handleClickClearSearch={handleClickClearSearch}
              handleClickStop={handleClickStop}
              ContenedorResultsSearchRef={ContenedorResultsSearchRef}
            />
          )}
        </div>
      </form>
    </div>
  );
}
