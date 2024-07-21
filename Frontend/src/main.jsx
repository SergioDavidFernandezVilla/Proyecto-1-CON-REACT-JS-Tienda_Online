import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/mediaquery.css";

//Context
import { ProductsFilterProvider } from "./context/useContextProductsFilter";
import { ShoppingCartProvider } from "./context/shoppingContext/useContextShopping.jsx";
import { ContextMenuProvider } from "./context/MenushopContext/useContextMenu.jsx";
import { AuthContextProvider } from "./context/AuthContext/useAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextMenuProvider>
        <ProductsFilterProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </ProductsFilterProvider>
      </ContextMenuProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
