//Dependencies
import { useContext } from "react";

//Components
import { FooterMenuAuthComponent } from "./FooterMenuAuth/FooterMenuAuthComponent";
import { HeaderMenuAuthComponent } from "./HeaderMenuAuth/HeaderMenuAuthComponent";
import { InputFormMenuAuthComponent } from "./InputFormMenuAuth/InputFormMenuAuthComponent";
import { ButtonsMenuAuthComponent } from "./ButtonsMenuAuth/ButtonsMenuAuthComponent";
import { TextOptionMenuAuthComponent } from "./TextOptionMenuAuth/TextOptionMenuAuthComponent";
import { CheckAcceptMenuAuthComponent } from "./CheckAcceptMenuAuth/CheckAcceptMenuAuthComponent";

//Context
import { AuthContext } from "../../context/AuthContext/useAuthContext";

//JSONs
import {
  RegisterData,
  LoginData,
} from "../../services/Jsons/DataInput/DataInput";

export const MenuAuthComponent = () => {
  const {
    isOpenAccount,
    isOpenMenuAuth,
    handleSubmitData,
    handleSubmitDataRegister,
  } = useContext(AuthContext);

  return (
    <>
      {/*Register*/}
      {isOpenAccount && (
        <div className="container__menu__auth">
          <form
            id="data-form"
            className="form__menu__auth"
            method="POST"
            onSubmit={(e) =>
              handleSubmitDataRegister(
                e,
                "http://localhost:3000/api/v1/register"
              )
            }
          >
            <div className="container__menu__auth__form">
              <HeaderMenuAuthComponent Text={"Crear una cuenta"} />

              {RegisterData.map((data) => (
                <InputFormMenuAuthComponent
                  key={data.id}
                  type={data.type}
                  placeholder={data.placeholder}
                  name={data.name}
                  autoComplete={data.autoComplete}
                  nameInput={data.nameInput}
                />
              ))}

              <CheckAcceptMenuAuthComponent />

              <ButtonsMenuAuthComponent
                BtnClassName="btn__menu__auth__div__buttons__especial"
                BtnClassName2="btn__menu__auth__div__buttons"
              />

              <TextOptionMenuAuthComponent
                TextP={"Si ya tienes una cuenta, puedes"}
                TextLink={"iniciar sesión"}
                URLTextLink={"/iniciar-sesion"}
              />
            </div>

            <FooterMenuAuthComponent TextAccount={"Crear una cuenta con"} />
          </form>
        </div>
      )}

      {/*Login*/}
      {isOpenMenuAuth && (
        <div className="container__menu__auth">
          <form
            className="form__menu__auth"
            method="POST"
            onSubmit={(e) =>
              handleSubmitData(e, "http://localhost:3000/api/v1/login")
            }
          >
            <div className="container__menu__auth__form">
              <HeaderMenuAuthComponent Text={"Iniciar sesión"} />

              {LoginData.map((data) => (
                <InputFormMenuAuthComponent
                  key={data.id}
                  type={data.type}
                  placeholder={data.placeholder}
                  name={data.name}
                  nameInput={data.nameInput}
                  autoComplete={data.autoComplete}
                />
              ))}

              <ButtonsMenuAuthComponent
                BtnClassName="btn__menu__auth__div__buttons"
                BtnClassName2="btn__menu__auth__div__buttons__especial"
              />

              <TextOptionMenuAuthComponent
                TextP={"Si no tienes una cuenta, puedes"}
                TextLink={"crear una nueva"}
                URLTextLink={"/crear-cuenta"}
              />

              <TextOptionMenuAuthComponent
                TextP={"¿Ya tienes una cuenta?"}
                TextLink={"Inicia sesión"}
                URLTextLink={"/iniciar-sesion"}
              />
            </div>

            <FooterMenuAuthComponent TextAccount={"Iniciar sesión con"} />
          </form>
        </div>
      )}
    </>
  );
};
