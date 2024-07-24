//Icons
import { MdOutlineLogin } from "react-icons/md";

export const ButtonLoginMenuAuthComponent = ({ BtnClassName }) => {
  return (
    <button className={BtnClassName}>
      <MdOutlineLogin className="btn__menu__auth__div__buttons__icon" />
      Iniciar sesión
    </button>
  );
};
