//Dependencies
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

//Icons
import { MdOutlineLogin, MdOutlinePerson } from "react-icons/md";

//Components
import { HeaderMenuAuthComponent } from "./HeaderMenuAuth/HeaderMenuAuthComponent";
import { FooterMenuAuthComponent } from "./FooterMenuAuth/FooterMenuAuthComponent";

export const MenuAuthComponent = () => {
  const [error, setError] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = () => {
    const email = inputRefEmail.current.value;
    setError(false);
    setErrorMessageEmail("");

    if (!email.includes("@")) {
      setError(true);
      setErrorMessageEmail("El correo debe contener un @");
    }
  };

  const handleChangePassword = () => {
    const password = inputRefPassword.current.value;
    setError(false);
    setErrorMessagePassword("");

    if (password.length < 8) {
      setError(true);
      setErrorMessagePassword("La contraseña debe tener al menos 8 caracteres");
    }
  };

  return (
    <div className="container__menu__auth">
      <form action="" className="form__menu__auth">
        <div className="container__menu__auth__form">
          <HeaderMenuAuthComponent />

          <div className="form__menu__auth__div">
            <label htmlFor="email" className="form__menu__auth__div__label">
              <strong>Correo: </strong>
            </label>
            <input
              onChange={handleChangeEmail}
              ref={inputRefEmail}
              type="email"
              name="email"
              id="email"
              autoComplete="username"
              placeholder="ejemplo@ejemplo.com"
              className="form__menu__auth__div__input"
            />

            {error && (
              <p className="form__menu__auth__div__p__error">
                {errorMessageEmail}
              </p>
            )}
          </div>

          <div className="form__menu__auth__div">
            <label htmlFor="password" className="form__menu__auth__div__label">
              <strong>Contraseña: </strong>
            </label>
            <input
              onChange={handleChangePassword}
              ref={inputRefPassword}
              type="password"
              name="password"
              id="password"
              placeholder="******"
              autoComplete="current-password"
              className="form__menu__auth__div__input"
            />

            {error && (
              <p className="form__menu__auth__div__p__error">
                {errorMessagePassword}
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
