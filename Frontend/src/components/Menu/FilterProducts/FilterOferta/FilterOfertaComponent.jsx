export default function FilterOfertaComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__ofertas"
    >
      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="recientes"
          name="form__filter__ofertas"
          value="recientes"
        />
        <label htmlFor="recientes">
          <strong>Ofertas más recientes</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="antiguas"
          name="form__filter__ofertas"
          value="antiguas"
        />
        <label htmlFor="antiguas">
          <strong>Ofertas más antiguas</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="todas"
          name="form__filter__ofertas"
          value="todas"
        />
        <label htmlFor="todas">
          <strong>Todas las ofertas</strong>
        </label>
      </div>
    </form>
  );
}
