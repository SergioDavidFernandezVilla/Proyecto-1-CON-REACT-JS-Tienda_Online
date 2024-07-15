import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ProductsFilterProvider } from "./context/useContextProductsFilter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsFilterProvider>
      <App />
    </ProductsFilterProvider>
  </React.StrictMode>
);
