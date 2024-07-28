//Dependencies
import { createContext, useContext, useState } from "react";

//Context
export const AuthContext = createContext();

//Hooks
import { useMenuAuthHook } from "../../hooks/MenuAuth/useMenuAuthHook";

export const AuthContextProvider = ({ children }) => {
  const {
    handleSubmitDataRegister,
    dataUser,
    token,
    setToken,
    setDataUser,
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    isOpenAccount,
    setIsOpenAccount,
    handleSubmitData,
    handleClickLogin,
    handleClickLogout,
    handleClickRegister,
  } = useMenuAuthHook();

  return (
    <AuthContext.Provider
      value={{
        handleSubmitDataRegister,
        dataUser,
        token,
        setToken,
        setDataUser,
        isOpenMenuAuth,
        setIsOpenMenuAuth,
        isOpenAccount,
        setIsOpenAccount,
        handleSubmitData,
        handleClickLogin,
        handleClickLogout,
        handleClickRegister,
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
