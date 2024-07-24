//Dependencies
import { Link } from "react-router-dom";

export const LiHeaderOptionComponent = ({ TextLink, TextURL }) => {
  return (
    <li className="header__menu__nav__opciones__nav__list__item_li">
      <Link
        to={TextURL}
        className="link__menu__nav__opciones__nav__list__item__link"
      >
        {TextLink}
      </Link>
    </li>
  );
};
