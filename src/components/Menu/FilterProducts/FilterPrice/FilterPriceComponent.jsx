export default function FilterPriceComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__precio"
    >
      <label className="form__opciones__filter__page__label">
        Precio minimo:{" "}
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        name="form__filter__precio"
        placeholder="Precio minimo"
      />

      <label className="form__opciones__filter__page__label">
        Precio maximo:{" "}
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        name="form__filter__precio"
        placeholder="Precio maximo"
      />
    </form>
  );
}
