//Icons
import {
  MdClear,
  MdSettings,
  MdLogout,
  MdAccountCircle,
  MdAssignment,
  MdAssignmentInd,
  MdAutorenew,
} from "react-icons/md";

//Dependencies
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { ContextMenu } from "../../context/MenushopContext/usoContextMenu";

//JSONs
import userJson from "../../services/Jsons/user/UserJson";

export const ModalConfiguracionComponent = () => {
  const { handleClickModalConfiguracion } = useContext(ContextMenu);

  const [user, setUser] = useState(userJson);

  const newUser = user.slice(0, 1);

  return (
    <div className="container__modal">
      <div className="modal__container">
        <header className="modal__container__header">
          <h2 className="modal__container__header__h2">
            <MdSettings className="modal__container__header__icon" />
            Configuracion
          </h2>

          <button
            className="button__modal__container"
            onClick={handleClickModalConfiguracion}
          >
            <MdClear className="button__modal__container__icon" />
          </button>
        </header>

        <nav className="modal__container__nav">
          <ul className="modal__container__nav__list__ul">
            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdAccountCircle className="modal__container__nav__list__link__icon" />
                Mi cuenta
              </Link>
            </li>
            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdAssignment className="modal__container__nav__list__link__icon" />
                Historial de pedidos
              </Link>
            </li>

            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdAssignmentInd className="modal__container__nav__list__link__icon" />
                Privacidad y seguridad
              </Link>
            </li>

            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdAutorenew className="modal__container__nav__list__link__icon" />
                Rembolso de pago
              </Link>
            </li>

            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdSettings className="modal__container__nav__list__link__icon" />
                Configuracion
              </Link>
            </li>

            <li className="modal__container__nav__list__li">
              <Link className="modal__container__nav__list__link">
                <MdLogout className="modal__container__nav__list__link__icon" />
                Cerrar sesión
              </Link>
            </li>
          </ul>

          {newUser.map((user) => (
            <article className="user__container__list__item" key={user.id}>
              <div className="user__container__list__item__div">
                <figure className="user__container__list__item__figure">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="modal__container__nav__list__link__icon"
                  />
                </figure>

                <header className="user__container__list__item__figure__header">
                  <h4 className="user__container__list__item__figure__h4">
                    {user.name}
                  </h4>
                </header>
              </div>
            </article>
          ))}
        </nav>
      </div>
    </div>
  );
};
