import Item from "../item";
import { items } from "../data";
import "./categories-main.css";

function CategoriesMain() {
  const filteredItems = items; //.filter((item) => item.category === "Sneakers");

  return (
    <section className="categories-items container">
      <div className="categories__items-container">
        {filteredItems.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesMain;
