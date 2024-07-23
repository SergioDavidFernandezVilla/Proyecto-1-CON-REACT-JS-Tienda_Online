//Dependencies
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { AuthContext } from "../../../../context/AuthContext/useAuthContext";

//Icons
import { MdLogout } from "react-icons/md";

export const AccountComponent = ({ user }) => {
  const { handleClickLogout } = useContext(AuthContext);

  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const handleClickAccount = () => {
    setIsOpenAccount(!isOpenAccount);
  };

  return (
    <ul className="header__menu__nav__opciones__nav__list_ul">
      {user.map((user) => (
        <li
          className={`header__menu__nav__opciones__nav__list__item_li ${
            isOpenAccount ? "active" : ""
          }`}
          key={user.id}
        >
          <Link
            onClick={handleClickAccount}
            to="/"
            className="link__menu__nav__opciones__nav__list__item__link"
          >
            <img
              src="https://www.gravatar.com/avatar/0"
              alt={user.name}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            {user.name}
          </Link>

          {isOpenAccount && (
            <ul className="header__menu__nav__opciones__nav__list__item__link__opciones__account__ul">
              <li className="header__menu__nav__opciones__nav__list__item__link__opciones__account__ul__li">
                <Link
                  onClick={handleClickLogout}
                  to=""
                  className="link__menu__nav__opciones__nav__list__item__link__opciones__account__ul__li__link"
                >
                  <MdLogout className="link__menu__nav__opciones__nav__list__item__link__opciones__account__ul__li__link__icon" />
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
