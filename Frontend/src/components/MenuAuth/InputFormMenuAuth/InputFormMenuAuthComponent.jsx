//Dependencies
import { useContext, useRef } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { ErrorTextFormMenuAuthComponent } from "./ErrorTextFormMenuAuth/ErrorTextFormMenuAuthComponent";

export const InputFormMenuAuthComponent = ({
  idType,
  name,
  nameInput,
  type,
  placeholder,
  autoComplete,
  IconInput,
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
            <img
              src={IconInput}
              alt={name}
              className="icon__menu__auth__div__input__icon"
            />
          </div>
        </div>

        <ErrorTextFormMenuAuthComponent ErrorMessage={errorMessageEmail} />
      </div>
    </>
  );
};
