//Css
import "./App.css";

// Dependencies
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// Pages Components
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailPage from "./pages/ProductDetails/ProductDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

//Utils
import { URL_PRODUCTS_SLUG, URL_PRODUCT_DETAIL } from "./utils/UrlPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_PRODUCTS_SLUG}`} element={<ProductsPage />} />
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
