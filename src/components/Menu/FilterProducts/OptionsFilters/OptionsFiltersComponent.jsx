// Components
import FilterOfertaComponent from "../FilterOferta/FilterOfertaComponent";
import FilterPriceComponent from "../FilterPrice/FilterPriceComponent";
import FilterCategoriesComponent from "../FilterCategories/FilterCategoriesComponent";
import FilterTodosComponent from "../FilterTodos/FilterTodosComponent";

export default function OptionsFiltersComponent({ options }) {
  const FiltersComponents = {
    todos: <FilterTodosComponent />,
    precios: <FilterPriceComponent />,
    ofertas: <FilterOfertaComponent />,
    categorias: <FilterCategoriesComponent />,
  };
  return (
    <div className="container__opciones__filter__page">
      <form className="container__opciones__filter__page__form">
        {FiltersComponents[options.name]}
      </form>
    </div>
  );
}
