// Dependencies
import { useContext, useEffect } from "react";

// Hooks
import { useMenuAuthHook } from "../../../hooks/MenuAuth/useMenuAuthHook";

// Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

// Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const {
    setIsOpenAccount,
    setIsOpenMenuAuth,
    dataUser,
    token,
    handleClickLogout,
  } = useContext(AuthContext);

  useEffect(() => {
    if (dataUser && dataUser.length > 0) {
      // Si existe un usuario en la sesión, No mostrar el componente de login
      setIsOpenAccount(false);
      setIsOpenMenuAuth(false);
    } else {
      // Si no existe usuario o el arreglo está vacío, actualizar estados
      setIsOpenAccount(false);
      setIsOpenMenuAuth(false);
    }
  }, [dataUser, setIsOpenAccount, setIsOpenMenuAuth]);

  return (
    <>
      {(dataUser && dataUser.length) || token ? (
        <AccountComponent
          user={dataUser}
          handleClickLogout={handleClickLogout}
        />
      ) : (
        <SignAccoutComponent />
      )}
    </>
  );
};
