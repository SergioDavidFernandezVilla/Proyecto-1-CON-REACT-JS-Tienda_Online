import { MdClear, MdSettings } from "react-icons/md";

//Hooks
import useModalConfigHook from "../../hooks/ModalConfig/usoModalConfigHook";

export const ModalConfiguracionComponent = ({
  handleClickModalConfiguracion,
}) => {
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
      </div>
    </div>
  );
};
