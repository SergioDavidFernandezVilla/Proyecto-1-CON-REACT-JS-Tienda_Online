import { MdOutlinePerson } from "react-icons/md";

export const ButtonRegisterMenuAuthComponent = ({
  handleClickRegister,
  isOpenAccount,
}) => {
  return (
    <button
      className="btn__menu__auth__div__buttons"
      onClick={handleClickRegister}
    >
      <MdOutlinePerson
        className={`btn__menu__auth__div__buttons__especial__icon ${
          isOpenAccount ? "active" : ""
        }`}
      />
      Crear una cuenta
    </button>
  );
};
