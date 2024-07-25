//Icons
import { MdOutlineLogin } from "react-icons/md";

//Dependencies
import { useContext } from "react";

//Context
import { AuthContext } from "../../../../context/AuthContext/useAuthContext";

export const ButtonLoginMenuAuthComponent = ({ BtnClassName }) => {
  const { isOpenMenuAuth, isOpenAccount } = useContext(AuthContext);

  return (
    <button className={BtnClassName}>
      <MdOutlineLogin className="btn__menu__auth__div__buttons__icon" />
      Iniciar sesión
    </button>
  );
};
