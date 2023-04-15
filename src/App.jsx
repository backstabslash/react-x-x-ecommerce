import { useState } from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Proud from "./components/proud/proud";
import Banner from "./components/banner/banner";

function App() {
  return (
    <>
      <Header /> <Home />
      <Proud /> <Banner />
    </>
  );
}

export default App;
