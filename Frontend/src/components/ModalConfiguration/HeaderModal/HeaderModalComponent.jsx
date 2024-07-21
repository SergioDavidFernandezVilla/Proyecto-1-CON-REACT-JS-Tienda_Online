//Icons
import { MdClear, MdSettings } from "react-icons/md";

//Context
import { ContextMenu } from "../../../context/MenushopContext/useContextMenu";

//Dependencies
import { useContext } from "react";

export const HeaderModalComponent = () => {
  const { handleClickModalConfiguracion } = useContext(ContextMenu);
  return (
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
  );
};
