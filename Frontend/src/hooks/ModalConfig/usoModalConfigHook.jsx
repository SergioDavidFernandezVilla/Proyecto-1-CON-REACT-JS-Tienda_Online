//Dependencies
import { useState, useEffect, useContext } from "react";

//Context
import { ShoppingCart } from "../../context/shoppingContext/useContextShopping";

export default function useModalConfigHook() {
  const [isOpenModalConfiguracion, setIsOpenModalConfiguracion] =
    useState(false);

  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  const handleClickModalConfiguracion = () => {
    setIsOpenModalConfiguracion(!isOpenModalConfiguracion);

    if (isOpenShopCart === true) {
      setIsOpenShopCart(false);
    }

    console.log("isOpenShopCart", isOpenShopCart);
    console.log("isOpenModalConfiguracion", isOpenModalConfiguracion);
  };

  const handleClickShopCart = () => {
    setIsOpenShopCart(!isOpenShopCart);
  };

  return {
    isOpenModalConfiguracion,
    setIsOpenShopCart,
    isOpenShopCart,
    setIsOpenShopCart,
    handleClickModalConfiguracion,
    handleClickShopCart,
  };
}
