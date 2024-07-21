//dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

export const AccountComponent = ({ user }) => {
  const { handleClickLogin } = useContext(AuthContext);

  return (
    <ul className="header__menu__nav__opciones__nav__list_ul">
      {user.map((user) => (
        <li
          className="header__menu__nav__opciones__nav__list__item_li"
          key={user.id}
        >
          <Link
            onClick={handleClickLogin}
            to="/"
            className="link__menu__nav__opciones__nav__list__item__link"
          >
            <img
              src={user.avatarURL}
              alt={user.name}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
