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
import { URLProductos, URLProductoDetail } from "./utils/UrlPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${URLProductos}:id`} element={<ProductsPage />} />
          <Route
            path="/products/producto-popular-9"
            element={<ProductsPage />}
          />

          <Route path={URLProductoDetail} element={<ProductDetailPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
