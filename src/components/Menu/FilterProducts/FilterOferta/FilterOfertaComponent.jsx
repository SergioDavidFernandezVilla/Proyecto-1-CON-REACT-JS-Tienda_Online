export default function FilterOfertaComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__ofertas"
    >
      <input type="checkbox" name="form__filter__ofertas" value="ofertas" />
      <label>ofertas mas recientes</label>

      <input type="checkbox" name="form__filter__ofertas" value="ofertas" />
      <label>ofertas mas antiguas</label>

      <input type="checkbox" name="form__filter__ofertas" value="ofertas" />
      <label>Todas las ofertas</label>
    </form>
  );
}
