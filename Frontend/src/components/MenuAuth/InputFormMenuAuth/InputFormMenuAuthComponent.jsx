//Dependencies
import { useContext, useRef } from "react";

//Icons
import { MdLockPerson, MdMailLock } from "react-icons/md";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

export const InputFormMenuAuthComponent = ({
  idType,
  name,
  nameInput,
  type,
  placeholder,
  autoComplete,
}) => {
  const { errorEmail, errorMessageEmail } = useContext(AuthContext);

  return (
    <>
      <div className="form__menu__auth__div">
        <label htmlFor={idType} className="form__menu__auth__div__label">
          <strong>{name}: </strong>
        </label>

        <div className="div__container__input">
          <input
            type={type}
            name={nameInput}
            id={idType}
            required="required"
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="form__menu__auth__div__input"
          />

          <div className="icon__menu__auth__div__input">
            <MdMailLock className="icon__menu__auth__div__input__icon" />
          </div>
        </div>

        {errorEmail && (
          <p className="form__menu__auth__div__p__error">{errorMessageEmail}</p>
        )}
      </div>
    </>
  );
};
