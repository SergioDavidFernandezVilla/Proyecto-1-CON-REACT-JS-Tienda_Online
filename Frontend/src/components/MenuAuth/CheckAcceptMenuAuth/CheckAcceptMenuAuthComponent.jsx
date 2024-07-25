export const CheckAcceptMenuAuthComponent = () => {
  return (
    <>
      <div className="form__menu__auth__div__check">
        <div className="div__container__check">
          <input
            type="checkbox"
            name="check"
            id="check"
            required="required"
            className="form__menu__auth__div__check__input"
          />
          <label
            htmlFor="check"
            className="form__menu__auth__div__check__label"
          >
            <p>
              <span>
                Acepto que la información que proporcione se mantenga en secreto
                y se utilice exclusivamente para la gestión de la cuenta.
                <a href="/">Ver política de privacidad</a>
              </span>
            </p>
          </label>
        </div>

        <div className="div__container__check">
          <input
            type="checkbox"
            name="check"
            id="check2"
            required="required"
            className="form__menu__auth__div__check__input"
          />
          <label
            htmlFor="check2"
            className="form__menu__auth__div__check__label"
          >
            <p>
              <span>
                Acepto los términos y condiciones de uso de la aplicación y la
                política de privacidad de la empresa que realiza la creación de
                esta cuenta.
                <a href="/">Ver política de privacidad</a>
              </span>
            </p>
          </label>
        </div>
      </div>
    </>
  );
};
