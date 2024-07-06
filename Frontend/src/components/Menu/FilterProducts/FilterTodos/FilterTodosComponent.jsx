export default function FilterTodosComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__todos"
    >
      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="todos"
          name="form__filter__todos"
          value="todos"
        />
        <label htmlFor="todos">
          <strong>Todas las ofertas</strong>
        </label>
      </div>
    </form>
  );
}
