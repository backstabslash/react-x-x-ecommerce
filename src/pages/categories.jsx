import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import CategoriesHeader from "../components/categories/categories-header";
import CategoriesMain from "../components/categories/categories-main";
import { useState } from "react";

function CategoriesPage() {
  const [filter, setFilter] = useState("All");
  const handleChangeFilter = (filter) => setFilter(filter);

  return (
    <>
      <CategoriesHeader passFilter={handleChangeFilter} />
      <CategoriesMain filter={filter} />
      <Banner />
    </>
  );
}

export default CategoriesPage;
