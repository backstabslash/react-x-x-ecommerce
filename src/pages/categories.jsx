import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import CategoriesHeader from "../components/categories/categories-header";
import CategoriesMain from "../components/categories/categories-main";

function CategoriesPage() {
  return (
    <>
      <CategoriesHeader />
      <CategoriesMain />
      <Banner />
      <Footer />
    </>
  );
}

export default CategoriesPage;
