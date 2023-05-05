import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />{" "}
        <Route index path="categories" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
