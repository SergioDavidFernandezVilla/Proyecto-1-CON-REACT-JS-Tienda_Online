import { useContext, useState } from "react";

import { ShoppingCart } from "../../context/useContextShopping";

export default function useShopHook() {
  const { cart, handleAddToCart, handleRemoveFromCart, totalCart } =
    useContext(ShoppingCart);

  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    totalCart,
    setIsOpenShopCart,
    isOpenShopCart,
  };
}
