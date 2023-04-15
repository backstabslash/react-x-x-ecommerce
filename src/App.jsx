import { useState } from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Proud from "./components/proud/proud";

function App() {
  return (
    <>
      <Header /> <Home />
      <Proud />
    </>
  );
}

export default App;
