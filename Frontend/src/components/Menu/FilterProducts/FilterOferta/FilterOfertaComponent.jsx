// Hooks
import useFilterOfertasHook from "./../../../../hooks/CategoriesFilters/useCategoriesFiltersHook";

// JSONs
import { AllOfertas } from "../../../../services/Jsons/CategoriesFilters/GategoriesFilters";

export default function FilterOfertaComponent() {
  const { handleClick } = useFilterOfertasHook();

  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__ofertas"
    >
      {AllOfertas.map((oferta) => (
        <div className="form__opciones__filter__input__div" key={oferta.id}>
          <input
            onClick={(e) => handleClick(e, oferta.name)}
            type="checkbox"
            id={oferta.id}
            name="categorias"
            value={oferta.name}
          />
          <label htmlFor={oferta.id}>
            <strong>{oferta.name}</strong>
          </label>
        </div>
      ))}
    </form>
  );
}
