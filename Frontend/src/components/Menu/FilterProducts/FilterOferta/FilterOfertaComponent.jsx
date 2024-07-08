// Hooks
import useFilterOfertasHook from "./../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

// JSONs
import { AllOfertas } from "../../../../services/Jsons/CategoriesFilters/CategoriesFilters";

export default function FilterOfertaComponent({ tipo }) {
  const { handleClick, selectedCategory } = useFilterOfertasHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name={`form__filter__${tipo}`}
      id={`form__filter__${tipo}`}
    >
      {AllOfertas.map((oferta) => (
        <div className="form__opciones__filter__input__div" key={oferta.id}>
          <input
            onChange={() => handleClick(oferta.name)}
            type="checkbox"
            id={oferta.id}
            name="categorias"
            value={oferta.name}
            checked={oferta.name === selectedCategory}
          />
          <label htmlFor={oferta.id}>
            <strong>{oferta.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
