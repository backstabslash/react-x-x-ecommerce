import Item from "../item";
import { items } from "../data";
import "./categories-main.css";
import { useEffect, useState } from "react";

function CategoriesMain({ filter }) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    filter === "All"
      ? setFilteredItems(items)
      : setFilteredItems(items.filter((item) => item.category === filter));
  }, [filter]);

  return (
    <section className="categories-items container">
      <div className="categories__items-container">
        {filteredItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesMain;
