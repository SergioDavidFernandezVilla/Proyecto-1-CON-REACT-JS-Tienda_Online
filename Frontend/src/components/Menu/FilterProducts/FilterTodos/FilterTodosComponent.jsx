// Hooks
import useFilterTodosHook from "./../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

// JSONs
import { AllFilters } from "../../../../services/Jsons/CategoriesFilters/GategoriesFilters";

export default function FilterTodosComponent() {
  const { handleClick } = useFilterTodosHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__todos"
    >
      {AllFilters.map((filter) => (
        <div className="form__opciones__filter__input__div" key={filter.id}>
          <input
            onClick={(e) => handleClick(e, filter.name)}
            type="checkbox"
            id={filter.id}
            name="categorias"
            value={filter.name}
          />
          <label htmlFor={filter.id}>
            <strong>{filter.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
