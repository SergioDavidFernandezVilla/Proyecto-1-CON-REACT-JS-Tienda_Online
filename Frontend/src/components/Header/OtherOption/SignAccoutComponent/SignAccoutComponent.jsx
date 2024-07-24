//Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { AuthContext } from "../../../../context/AuthContext/useAuthContext";

//Icons
import { MdOutlineLogin, MdOutlinePerson } from "react-icons/md";

export const SignAccoutComponent = () => {
  const { handleClickLogin, handleClickRegister } = useContext(AuthContext);

  return (
    <ul className="header__menu__nav__opciones__nav__list_ul">
      <li className="header__menu__nav__opciones__nav__list__item_li">
        <Link
          onClick={handleClickLogin}
          to="/"
          className="link__menu__nav__opciones__nav__list__item__link"
        >
          <MdOutlineLogin className="link__menu__nav__opciones__nav__list__item__link__icon" />
          Iniciar sesión
        </Link>
      </li>

      <li className="header__menu__nav__opciones__nav__list__item_li">
        <Link
          className="link__menu__nav__opciones__nav__list__item__link"
          onClick={handleClickRegister}
        >
          <MdOutlinePerson className="link__menu__nav__opciones__nav__list__item__link__icon" />
          Crear una cuenta
        </Link>
      </li>
    </ul>
  );
};
