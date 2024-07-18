//Icons
import { MdClear, MdSettings } from "react-icons/md";

//Dependencies
import { useContext } from "react";

//Context
import { ContextMenu } from "../../context/MenushopContext/usoContextMenu";

export const ModalConfiguracionComponent = () => {
  const {
    isOpenModalConfiguracion,
    setIsOpenModalConfiguracion,
    handleClickModalConfiguracion,
  } = useContext(ContextMenu);

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
