import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_PAGE,
} from "../../../../utils/UrlPage";
import FilterOfertaComponent from "../FilterOferta/FilterOfertaComponent";
import FilterPriceComponent from "../FilterPrice/FilterPriceComponent";
import FilterCategoriesComponent from "../FilterCategories/FilterCategoriesComponent";
import FilterTodosComponent from "../FilterTodos/FilterTodosComponent";

export default function OptionsFiltersComponent({
  options,
  activeFilter,
  Valor,
}) {
  const navigate = useNavigate();
  const { categoria, page } = useParams();
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (options.name !== activeFilter) {
      setValueInput(null); // Reset valueInput when activeFilter changes
    }
  }, [options.name, activeFilter]);

  useEffect(() => {
    if (valueInput !== null) {
      const selectedCategory = valueInput
        ? valueInput.trim().toLowerCase().replaceAll(" ", "-")
        : "all";
      navigate(`/productos/filter/query/${selectedCategory}/page/${page || 1}`);
    }
  }, [valueInput, navigate, page]);

  const FiltersComponents = {
    todos: <FilterTodosComponent tipo={options.name} />,
    precios: <FilterPriceComponent />,
    ofertas: <FilterOfertaComponent tipo={options.name} />,
    categorias: <FilterCategoriesComponent tipo={options.name} />,
  };

  return (
    <div
      className={`container__opciones__filter__page ${
        activeFilter === options.name ? "active" : "disabled"
      }`}
    >
      {FiltersComponents[options.name]}
    </div>
  );
}
