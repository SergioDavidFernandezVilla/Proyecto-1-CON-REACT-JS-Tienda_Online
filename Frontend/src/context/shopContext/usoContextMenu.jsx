//Dependencies
import { useState, useEffect, createContext } from "react";

//Hooks
import useModalConfigHook from "../../hooks/ModalConfig/usoModalConfigHook";

export const ContextMenu = createContext();

export const ContextMenuProvider = ({ children }) => {
  const {
    isOpenModalConfiguracion,
    setIsOpenModalConfiguracion,
    handleClickModalConfiguracion,
    handleClickShopCart,
    isOpenShopCart,
    setIsOpenShopCart,
  } = useModalConfigHook();

  return (
    <ContextMenu.Provider
      value={{
        isOpenShopCart,
        setIsOpenShopCart,
        isOpenModalConfiguracion,
        setIsOpenModalConfiguracion,
        handleClickModalConfiguracion,
        handleClickShopCart,
        isOpenShopCart,
        setIsOpenShopCart,
      }}
    >
      {children}
    </ContextMenu.Provider>
  );
};
