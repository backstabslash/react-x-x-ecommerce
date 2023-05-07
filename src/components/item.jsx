import { Link } from "react-router-dom";
import "./proud/proud.css";

function Item({ item }) {
  return (
    <div className="proud__item">
      <Link onClick={() => window.top(0, 0)} to={`/product/${item.id}`}>
        <div className="proud__item-header">
          <div className="proud__img-overlay">
            <img src={item.img} alt={item.id + " " + item.description}></img>
          </div>
        </div>
        <div className="proud__item-description">
          <p className="proud__item-label">{item.description}</p>
          <p className="proud__item-price">{item.price}€</p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
