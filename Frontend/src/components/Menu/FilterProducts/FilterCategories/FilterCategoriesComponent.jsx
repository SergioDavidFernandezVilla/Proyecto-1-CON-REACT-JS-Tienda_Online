export default function FilterCategoriesComponent() {
  return (
    <form
      className="container__opciones__filter__page__form"
      name="form__filter__categorias"
    >
      <div className="form__opciones__filter__input__div">
        <input type="checkbox" id="todas" name="categorias" value="todas" />
        <label htmlFor="todas">
          <strong>Todas las categorías</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="electronico"
          name="categorias"
          value="electronico"
        />
        <label htmlFor="electronico">
          <strong>Electrónico</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input type="checkbox" id="muebles" name="categorias" value="muebles" />
        <label htmlFor="muebles">
          <strong>Muebles</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="articulos"
          name="categorias"
          value="articulos"
        />
        <label htmlFor="articulos">
          <strong>Articulos</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input
          type="checkbox"
          id="mascotas"
          name="categorias"
          value="mascotas"
        />
        <label htmlFor="mascotas">
          <strong>Mascotas y animales</strong>
        </label>
      </div>

      <div className="form__opciones__filter__input__div">
        <input type="checkbox" id="hogar" name="categorias" value="hogar" />
        <label htmlFor="hogar">
          <strong>Cosas del hogar</strong>
        </label>
      </div>
    </form>
  );
}
