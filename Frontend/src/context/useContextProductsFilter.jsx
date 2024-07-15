import { createContext, useContext, useState } from "react";

export const ProductsFilterContext = createContext();

export const ProductsFilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState();

  return (
    <ProductsFilterContext.Provider
      value={{ searchQuery, setSearchQuery, totalPages, setTotalPages }}
    >
      {children}
    </ProductsFilterContext.Provider>
  );
};
