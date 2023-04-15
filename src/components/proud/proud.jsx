import "./proud.css";
import ProudItem from "./proudItem";
import { items } from "../data";

function Proud() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <section className="proud container section">
      <h2 className="proud__title">Shoes we are proud of: </h2>
      <div className="proud__item-container">
        {filteredItems.map((item) => (
          <ProudItem item={item} />
        ))}
      </div>
    </section>
  );
}

export default Proud;
