// Icons
import { MdExpandMore } from "react-icons/md";

//Dependencies
import { useEffect, useState } from "react";

// Components
import OptionsFiltersComponent from "../OptionsFilters/OptionsFiltersComponent";

//JSONs
import DataOptions from "../../../../services/Jsons/OptionsFiltersMenu";

export default function MenuFiltersProductsComponent() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [options, setOptions] = useState(DataOptions);

  useEffect(() => {
    setOptions(DataOptions);
  }, []);

  const handleFilterClick = (filterName) => {
    setActiveFilter((prevFilter) =>
      prevFilter === filterName ? null : filterName
    );
  };

  return (
    <nav className="nav__products__filter__page">
      <header className="nav__products__filter__page__header">
        <h3 className="nav__products__filter__page__h3">Opciones de filtro</h3>
      </header>
      <ul className="nav__products__filter__page__ul">
        {options.map((option) => (
          <li
            key={option.id}
            className={`nav__products__filter__page__li ${
              activeFilter === option.name ? "active" : "disabled"
            }`}
          >
            <button
              className={`nav__products__filter__page__a ${
                activeFilter === option.name ? "active" : "disabled"
              }`}
              onClick={() => handleFilterClick(option.name)}
            >
              <MdExpandMore
                className={`nav__products__filter__page__a__icon ${
                  activeFilter === option.name ? "active" : "disabled"
                }`}
              />
              {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
            </button>
            {activeFilter === option.name && (
              <OptionsFiltersComponent
                options={option}
                activeFilter={activeFilter}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
