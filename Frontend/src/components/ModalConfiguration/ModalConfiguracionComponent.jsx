//Components
import { NavModalComponent } from "./NavModal/NavModalComponent";
import { HeaderModalComponent } from "./HeaderModal/HeaderModalComponent";

export const ModalConfiguracionComponent = () => {
  return (
    <div className="container__modal">
      <div className="modal__container">
        <HeaderModalComponent />

        <NavModalComponent />
      </div>
    </div>
  );
};
