import { createContext, useEffect, useState } from "react";

//Hooks
import useShoppingHook from "../hooks/shopping/usoShoppingHook";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveAllFromCart,
    updateQuantity,
    setTotalCart,
    totalCart,
    setIsOpenShopCart,
    isOpenShopCart,
    cantidad,
    setCantidad,
    newCart,
    setNewCart,
  } = useShoppingHook();

  return (
    <ShoppingCart.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleRemoveAllFromCart,
        updateQuantity,
        setTotalCart,
        totalCart,
        setIsOpenShopCart,
        isOpenShopCart,
        cantidad,
        setCantidad,
        newCart,
        setNewCart,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
