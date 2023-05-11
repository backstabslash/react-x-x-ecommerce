import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header-mobnav-cart/header";
import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";
import ProductPage from "./pages/product";
import Cart from "./components/header-mobnav-cart/cart";
import Footer from "./components/footer/footer";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/categories" element={<CategoriesPage />} />
          <Route index path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
