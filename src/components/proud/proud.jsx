import "./proud.css";
import Item from "../item";
import { items } from "../data";

function Proud() {
  // Showing Elements 'til 9 Index
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <section className="proud container section">
      <h2 className="proud__title">Shoes we are proud of </h2>
      <div className="proud__item-container">
        {filteredItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Proud;
