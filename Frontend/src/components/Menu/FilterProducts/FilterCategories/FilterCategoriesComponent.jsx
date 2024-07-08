// Hooks
import useCategoriesFiltersHook from "../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

export default function FilterCategoriesComponent({ tipo }) {
  const { handleClick, selectedCategory, CategoriesFilters } =
    useCategoriesFiltersHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name={`form__filter__${tipo}`}
      id={`form__filter__${tipo}`}
    >
      {CategoriesFilters.map((category) => (
        <div className="form__opciones__filter__input__div" key={category.id}>
          <input
            type="checkbox"
            id={category.id}
            name="categorias"
            value={category.name}
            checked={category.name === selectedCategory}
            onChange={() => handleClick(category.name)}
          />
          <label htmlFor={category.id}>
            <strong>{category.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
