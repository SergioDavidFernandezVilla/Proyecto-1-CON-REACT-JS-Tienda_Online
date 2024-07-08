// Hooks
import useFilterTodosHook from "./../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

// JSONs
import { AllFilters } from "../../../../services/Jsons/CategoriesFilters/CategoriesFilters";

export default function FilterTodosComponent({ tipo }) {
  const { handleClick, selectedCategory, CategoriesFilters } =
    useFilterTodosHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name={`form__filter__${tipo}`}
      id={`form__filter__${tipo}`}
    >
      {AllFilters.map((filter) => (
        <div className="form__opciones__filter__input__div" key={filter.id}>
          <input
            type="checkbox"
            id={filter.id}
            name="categorias"
            value={filter.name}
            checked={filter.name === selectedCategory}
            onChange={() => handleClick(filter.name)}
          />
          <label htmlFor={filter.id}>
            <strong>{filter.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
