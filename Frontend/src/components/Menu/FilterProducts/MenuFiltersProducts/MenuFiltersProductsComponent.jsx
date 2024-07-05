// Icons
import { MdExpandMore } from "react-icons/md";

//Dependencies
import { useState } from "react";

// Components
import OptionsFiltersComponent from "../OptionsFilters/OptionsFiltersComponent";

export default function MenuFiltersProductsComponent() {
  const [activeFilter, setActiveFilter] = useState(null);

  const options = [
    {
      id: 1,
      name: "todos",
    },
    {
      id: 2,
      name: "categorias",
    },
    {
      id: 3,
      name: "ofertas",
    },
    {
      id: 4,
      name: "precios",
    },
  ];

  const handleFilterClick = (filterName) => {
    setActiveFilter((prevFilter) =>
      prevFilter === filterName ? null : filterName
    );
  };

  console.log(options);

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
              <OptionsFiltersComponent options={option} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
