//Dependencies
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const OtherOptionsComponent = () => {
  return (
    <ul className="header__menu__nav__opciones__nav__list_ul">
      <li className="header__menu__nav__opciones__nav__list__item_li">
        <Link
          to="/"
          className="link__menu__nav__opciones__nav__list__item__link"
        >
          Iniciar sesión
        </Link>
      </li>

      <li className="header__menu__nav__opciones__nav__list__item_li">
        <Link className="link__menu__nav__opciones__nav__list__item__link">
          Crear una cuenta
        </Link>
      </li>
    </ul>
  );
};
