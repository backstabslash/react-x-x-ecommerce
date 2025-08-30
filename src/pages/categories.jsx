import Banner from '../components/banner/banner';
import CategoriesHeader from '../components/categories/categories-header';
import CategoriesMain from '../components/categories/categories-main';
import { useState } from 'react';

function CategoriesPage() {
  // State That I Change In The Child and Then Pass To Other Child
  const [filter, setFilter] = useState('All');

  // Method to Change Active Category that I Pass To Child
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
