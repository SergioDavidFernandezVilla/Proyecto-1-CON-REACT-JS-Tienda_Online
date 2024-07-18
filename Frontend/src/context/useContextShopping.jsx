import { createContext, useState } from "react";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [cantidad, setCantidad] = useState(1);

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

  return (
    <ShoppingCart.Provider
      value={{
        cart, // Establecer el estado del carrito
        setCart, // Establecer el estado del carrito
        handleAddToCart, // Función para agregar un producto al carrito
        handleRemoveFromCart, // Función para remover un producto del carrito
        totalCart, // Establecer el estado del total del carrito
        setTotalCart, // Establecer el estado del total del carrito
        newCart, // Establecer el estado del carrito actual
        setNewCart, // Establecer el estado del carrito actual
        handleRemoveAllFromCart, // Función para remover todos los productos del carrito
        cantidad, // Establecer el estado de la cantidad del carrito
        setCantidad, // Establecer el estado de la cantidad del carrito
        updateQuantity, // Función para actualizar la cantidad del producto seleccionado
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
