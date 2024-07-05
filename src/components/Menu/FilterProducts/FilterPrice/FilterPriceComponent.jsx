export default function FilterPriceComponent() {
  return (
    <>
      <label className="form__opciones__filter__page__label">
        Precio minimo:{" "}
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        name="precio"
        placeholder="Precio minimo"
      />

      <label className="form__opciones__filter__page__label">
        Precio maximo:{" "}
      </label>
      <input
        className="form__opciones__filter__page__input"
        type="number"
        name="precio"
        placeholder="Precio maximo"
      />
    </>
  );
}
