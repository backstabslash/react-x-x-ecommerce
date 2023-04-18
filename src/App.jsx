import { useState } from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Proud from "./components/proud/proud";
import Banner from "./components/banner/banner";
import Trending from "./components/trending/trending";
import BannerMirrored from "./components/banner/bannerMirrored";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header /> <Home />
      <Proud /> <Banner />
      <Trending /> <BannerMirrored />
      <Footer />
    </>
  );
}

export default App;
