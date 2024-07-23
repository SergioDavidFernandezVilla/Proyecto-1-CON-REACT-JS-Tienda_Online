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
    user,
    setUser,
    handleClickLogin,
    handleClickLogout,
    handleSubmitData,
    handleChangeEmail,
    handleChangePassword,
    errorEmail,
    errorMessageEmail,
    errorPassword,
    errorGeneral,
    errorMessageGeneral,
    errorMessagePassword,
  } = useMenuAuthHook();

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser([]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        isOpenMenuAuth,
        setIsOpenMenuAuth,
        handleClickLogin,
        handleClickLogout,
        handleSubmitData,
        handleChangeEmail,
        handleChangePassword,
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
