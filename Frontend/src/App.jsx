//Css
import "./App.css";

// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages Components
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailPage from "./pages/ProductDetails/ProductDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

//Utils
import {
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_CATEGORY_ID,
  URL_PRODUCTS_PAGE,
  URL_PRODUCT_DETAIL,
} from "./utils/UrlPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${URL_PRODUCTS}${URL_PRODUCTS_CATEGORY}${URL_PRODUCTS_CATEGORY_ID}${URL_PRODUCTS_PAGE}:id`}
            element={<ProductsPage />}
          />
          <Route
            path="/products/producto-popular-9"
            element={<ProductsPage />}
          />

          <Route path={URL_PRODUCT_DETAIL} element={<ProductDetailPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
