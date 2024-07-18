import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Context
import { ProductsFilterProvider } from "./context/useContextProductsFilter";
import { ShoppingCartProvider } from "./context/useContextShopping";
import { ContextMenuProvider } from "./context/shopContext/usoContextMenu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextMenuProvider>
      <ProductsFilterProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </ProductsFilterProvider>
    </ContextMenuProvider>
  </React.StrictMode>
);
