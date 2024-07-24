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
  const { isOpenMenuAuth, isOpenAccount, handleSubmitData } =
    useContext(AuthContext);

  console.log("isOpenMenuAuth", isOpenMenuAuth);
  console.log("isOpenAccount", isOpenAccount);

  return (
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

          <ButtonsMenuAuthComponent />

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
  );
};
