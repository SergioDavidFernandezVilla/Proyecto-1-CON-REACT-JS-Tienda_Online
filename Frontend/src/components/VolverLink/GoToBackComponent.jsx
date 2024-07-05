import { Link, useNavigate } from "react-router-dom";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function GoToBackComponent() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <nav className="nav__go_to_back__container">
        <Link onClick={handleClickBack} className="go_to_back">
          <MdArrowBack className="go_to_back__icon" />
          <h5 className="go_to_back__text">Volver a la página anterior</h5>
        </Link>

        <Link className="link__go__to__home" to="/">
          <MdArrowForward className="icon__go_to_home" />
          <h5 className="go_to_back__text">Ir a la página principal</h5>
        </Link>
      </nav>
    </>
  );
}
