export default function FilterPriceComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__precio"
    >
      <label
        className="form__opciones__filter__page__label"
        htmlFor="precio-minimo"
      >
        <strong>Precio mínimo:</strong>
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        id="precio-minimo"
        name="precio-minimo"
        placeholder="$100"
      />

      <label
        className="form__opciones__filter__page__label"
        htmlFor="precio-maximo"
      >
        <strong>Precio máximo:</strong>
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        id="precio-maximo"
        name="precio-maximo"
        placeholder="$500"
      />
    </form>
  );
}
