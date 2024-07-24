//Components
import { ButtonLoginMenuAuthComponent } from "./ButtonLoginMenuAuth/ButtonLoginMenuAuthComponent";
import { ButtonRegisterMenuAuthComponent } from "./ButtonRegisterMenuAuth/ButtonRegisterMenuAuthComponent";

export const ButtonsMenuAuthComponent = () => {
  return (
    <div className="form__menu__auth__div__buttons">
      <ButtonLoginMenuAuthComponent />
      <ButtonRegisterMenuAuthComponent />
    </div>
  );
};
