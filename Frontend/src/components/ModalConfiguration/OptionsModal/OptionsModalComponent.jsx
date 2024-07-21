//Dependencies

import { Link } from "react-router-dom";

export const OptionsModalComponent = ({ option }) => {
  return (
    <li className="modal__container__nav__list__li" key={option.id}>
      <Link className="modal__container__nav__list__link">
        <option.icon className="modal__container__nav__list__link__icon" />
        {option.name}
      </Link>
    </li>
  );
};
