//Components
import { ButtonLoginMenuAuthComponent } from "./ButtonLoginMenuAuth/ButtonLoginMenuAuthComponent";
import { ButtonRegisterMenuAuthComponent } from "./ButtonRegisterMenuAuth/ButtonRegisterMenuAuthComponent";

export const ButtonsMenuAuthComponent = ({ BtnClassName, BtnClassName2 }) => {
  return (
    <div className="form__menu__auth__div__buttons">
      <ButtonLoginMenuAuthComponent BtnClassName={BtnClassName2} />
      <ButtonRegisterMenuAuthComponent BtnClassName={BtnClassName} />
    </div>
  );
};
