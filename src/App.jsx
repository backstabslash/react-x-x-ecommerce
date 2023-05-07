import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";
import ProductPage from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />{" "}
        <Route index path="categories" element={<CategoriesPage />} />
        <Route index path="product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
