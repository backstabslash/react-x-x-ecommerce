import Banner from "../components/banner/bannerMirrored";
import Trending from "../components/trending/trending";
import Footer from "../components/footer/footer";
import Product from "../components/product/product";

function ProductPage() {
  return (
    <>
      <Product />
      <Trending />
      <Banner />
    </>
  );
}

export default ProductPage;
