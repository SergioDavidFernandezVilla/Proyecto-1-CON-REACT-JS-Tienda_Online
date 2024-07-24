//Dependencies
import { useContext, useRef } from "react";

//Icons
import { MdLockPerson, MdMailLock } from "react-icons/md";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

export const InputFormMenuAuthComponent = () => {
  const {
    handleChangeEmail,
    errorEmail,
    errorMessageEmail,
    handleChangePassword,
    errorPassword,
    errorMessagePassword,
    errorGeneral,
    errorMessageGeneral,
  } = useContext(AuthContext);

  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);

  return (
    <>
      <div className="form__menu__auth__div">
        <label htmlFor="email" className="form__menu__auth__div__label">
          <strong>Correo: </strong>
        </label>

        <div className="div__container__input">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="username"
            placeholder="ejemplo@ejemplo.com"
            className="form__menu__auth__div__input"
            ref={inputRefEmail}
            onChange={(e) => handleChangeEmail(e)}
          />

          <div className="icon__menu__auth__div__input">
            <MdMailLock className="icon__menu__auth__div__input__icon" />
          </div>
        </div>

        {errorEmail && (
          <p className="form__menu__auth__div__p__error">{errorMessageEmail}</p>
        )}
      </div>

      <div className="form__menu__auth__div">
        <label htmlFor="password" className="form__menu__auth__div__label">
          <strong>Contraseña: </strong>
        </label>

        <div className="div__container__input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            autoComplete="current-password"
            className="form__menu__auth__div__input"
            ref={inputRefPassword}
            onChange={(e) => handleChangePassword(e)}
          />

          <div className="icon__menu__auth__div__input">
            <MdLockPerson className="icon__menu__auth__div__input__icon" />
          </div>
        </div>

        {errorPassword && (
          <p className="form__menu__auth__div__p__error">
            {errorMessagePassword}
          </p>
        )}

        {errorGeneral && (
          <p className="form__menu__auth__div__p__error">
            {errorMessageGeneral}
          </p>
        )}
      </div>
    </>
  );
};
