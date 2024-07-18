//Dependencies
import { useContext, useState } from "react";

export default function useShoppingHook() {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  const handleAddToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const SiExiste = newCart.some((cartItem) => cartItem.id === product.id);

    if (!SiExiste) {
      setNewCart([...newCart, product]);
    } else {
      console.log("El producto ya existe en el carro");
    }
  };

  const handleRemoveFromCart = (product, e) => {
    e.stopPropagation(); // Evitar que se dispare el evento click

    const updatedCart = newCart.filter(
      (cartProduct) => cartProduct.id !== product.id
    ); // Filtra el producto seleccionado

    setNewCart(updatedCart);
  };

  const handleRemoveAllFromCart = (e) => {
    e.stopPropagation();

    setNewCart([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = newCart.map(
      (item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item // Cambia la cantidad del producto seleccionado en el carrito
    );
    setNewCart(updatedCart);
  };

  return {
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
  };
}
