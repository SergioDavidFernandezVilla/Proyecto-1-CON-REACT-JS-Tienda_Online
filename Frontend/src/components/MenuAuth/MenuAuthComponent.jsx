//Dependencies
import { useContext } from "react";

//Components
import { FooterMenuAuthComponent } from "./FooterMenuAuth/FooterMenuAuthComponent";
import { HeaderMenuAuthComponent } from "./HeaderMenuAuth/HeaderMenuAuthComponent";
import { InputFormMenuAuthComponent } from "./InputFormMenuAuth/InputFormMenuAuthComponent";
import { ButtonsMenuAuthComponent } from "./ButtonsMenuAuth/ButtonsMenuAuthComponent";
import { TextOptionMenuAuthComponent } from "./TextOptionMenuAuth/TextOptionMenuAuthComponent";

//Context
import { AuthContext } from "../../context/AuthContext/useAuthContext";

export const MenuAuthComponent = () => {
  const { isOpenAccount, isOpenMenuAuth, handleSubmitData } =
    useContext(AuthContext);

  return (
    <>
      {isOpenAccount && (
        <div className="container__menu__auth">
          <form
            className="form__menu__auth"
            method="POST"
            onSubmit={(e) =>
              handleSubmitData(e, "http://localhost:3000/api/v1/login")
            }
          >
            <div className="container__menu__auth__form">
              <HeaderMenuAuthComponent Text={"Crear una cuenta"} />

              <InputFormMenuAuthComponent />

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

            <FooterMenuAuthComponent />
          </form>
        </div>
      )}

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

              <InputFormMenuAuthComponent />

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

            <FooterMenuAuthComponent />
          </form>
        </div>
      )}
    </>
  );
};
