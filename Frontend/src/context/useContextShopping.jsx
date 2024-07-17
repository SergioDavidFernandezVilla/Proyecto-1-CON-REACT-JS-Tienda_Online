import { createContext, useContext, useState } from "react";

//Jsons
import data from "../services/Jsons/productsPopularData";
import data2 from "../services/Jsons/ProductsImagen";
import data3 from "../services/Jsons/GalleyProductsImagen";
import data4 from "../services/Jsons/CarrouselCards/carrousel";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

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
    e.stopPropagation();

    const updatedCart = newCart.filter(
      (cartProduct) => cartProduct.id !== product.id // Filtra el producto seleccionado
    );
    setNewCart(updatedCart);
  };

  const handleRemoveAllFromCart = (e) => {
    e.stopPropagation();

    setNewCart([]);
  };

  return (
    <ShoppingCart.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart,
        totalCart,
        setTotalCart,
        newCart,
        setNewCart,
        handleRemoveAllFromCart,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
