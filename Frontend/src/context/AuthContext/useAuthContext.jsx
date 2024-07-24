//Dependencies
import { createContext, useContext, useState } from "react";

//Context
export const AuthContext = createContext();

//Hooks
import { useMenuAuthHook } from "../../hooks/MenuAuth/useMenuAuthHook";

export const AuthContextProvider = ({ children }) => {
  const {
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    isOpenAccount,
    setIsOpenAccount,
    dataUSer,
    setDataUser,
    Loguout,
    handleClickLogin,
    handleClickLogout,
    handleSubmitData,
    handleChangeEmail,
    handleChangePassword,
    handleClickRegister,
    errorEmail,
    errorMessageEmail,
    errorPassword,
    errorGeneral,
    errorMessageGeneral,
    errorMessagePassword,
  } = useMenuAuthHook();

  return (
    <AuthContext.Provider
      value={{
        dataUSer,
        setDataUser,
        Loguout,
        isOpenMenuAuth,
        setIsOpenMenuAuth,
        isOpenAccount,
        setIsOpenAccount,
        handleClickLogin,
        handleClickLogout,
        handleSubmitData,
        handleChangeEmail,
        handleChangePassword,
        handleClickRegister,
        errorEmail,
        errorMessageEmail,
        errorPassword,
        errorGeneral,
        errorMessageGeneral,
        errorMessagePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
