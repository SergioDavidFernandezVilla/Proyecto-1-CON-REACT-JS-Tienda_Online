import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineLogin,
  MdOutlinePerson,
  MdLockPerson,
  MdMailLock,
} from "react-icons/md";
import { HeaderMenuAuthComponent } from "./HeaderMenuAuth/HeaderMenuAuthComponent";
import { FooterMenuAuthComponent } from "./FooterMenuAuth/FooterMenuAuthComponent";

//Context
import { AuthContext } from "../../context/AuthContext/useAuthContext";

export const MenuAuthComponent = () => {
  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);
  const [data, setData] = useState([]);

  const {
    handleSubmitData,
    handleChangeEmail,
    handleChangePassword,
    errorEmail,
    errorMessageEmail,
    errorPassword,
    errorGeneral,
    errorMessageGeneral,
    errorMessagePassword,
  } = useContext(AuthContext);

  return (
    <div className="container__menu__auth">
      <form
        className="form__menu__auth"
        method="POST"
        onSubmit={(e) =>
          handleSubmitData(e, "http://localhost:3000/api/v1/login")
        }
      >
        <div className="container__menu__auth__form">
          <HeaderMenuAuthComponent />

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
              <p className="form__menu__auth__div__p__error">
                {errorMessageEmail}
              </p>
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

          <div className="form__menu__auth__div__buttons">
            <button className="btn__menu__auth__div__buttons__especial">
              <MdOutlineLogin className="btn__menu__auth__div__buttons__especial__icon" />
              Iniciar sesión
            </button>
            <button className="btn__menu__auth__div__buttons">
              <MdOutlinePerson className="btn__menu__auth__div__buttons__icon" />
              Crear una cuenta
            </button>
          </div>

          <p className="form__menu__auth__div__p">
            Si no tienes una cuenta, puedes{" "}
            <Link to="/crear-cuenta" className="form__menu__auth__div__p__link">
              crear una nueva
            </Link>
          </p>

          <p className="form__menu__auth__div__p">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/iniciar-sesion"
              className="form__menu__auth__div__p__link"
            >
              Inicia sesión
            </Link>
          </p>
        </div>

        <FooterMenuAuthComponent />
      </form>
    </div>
  );
};
