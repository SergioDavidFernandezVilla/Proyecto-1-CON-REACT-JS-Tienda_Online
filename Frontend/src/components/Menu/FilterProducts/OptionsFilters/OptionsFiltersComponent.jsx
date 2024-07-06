// Components
import FilterOfertaComponent from "../FilterOferta/FilterOfertaComponent";
import FilterPriceComponent from "../FilterPrice/FilterPriceComponent";
import FilterCategoriesComponent from "../FilterCategories/FilterCategoriesComponent";
import FilterTodosComponent from "../FilterTodos/FilterTodosComponent";

export default function OptionsFiltersComponent({ options, activeFilter }) {
  const FiltersComponents = {
    todos: <FilterTodosComponent />,
    precios: <FilterPriceComponent />,
    ofertas: <FilterOfertaComponent />,
    categorias: <FilterCategoriesComponent />,
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
