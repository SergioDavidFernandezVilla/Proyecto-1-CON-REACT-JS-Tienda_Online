// JSONs
import { CategoriesFilters } from "../../../../services/Jsons/CategoriesFilters/GategoriesFilters";

// Hooks
import useCategoriesFiltersHook from "../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

export default function FilterCategoriesComponent() {
  const { handleClick } = useCategoriesFiltersHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__categorias"
    >
      {CategoriesFilters.map((category) => (
        <div className="form__opciones__filter__input__div" key={category.id}>
          <input
            onClick={(e) => handleClick(e, category.name)}
            type="checkbox"
            id={category.id}
            name="categorias"
            value={category.name}
          />
          <label htmlFor={category.id}>
            <strong>{category.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
