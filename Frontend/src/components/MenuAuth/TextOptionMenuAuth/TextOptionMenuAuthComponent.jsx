//Dependencies
import { Link } from "react-router-dom";

export const TextOptionMenuAuthComponent = ({
  TextP,
  TextLink,
  URLTextLink,
}) => {
  return (
    <p className="form__menu__auth__div__p">
      {TextP}{" "}
      <Link to={URLTextLink} className="form__menu__auth__div__p__link">
        {TextLink}
      </Link>
    </p>
  );
};
