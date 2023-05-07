import { Link } from "react-router-dom";
import "./trending.css";

function TrendingItem({ item }) {
  return (
    <div className="trending__item">
      <Link onClick={() => window.top(0, 0)} to={`/product/${item.id}`}>
        <div className="trending__item-header">
          <div className="trending__img-overlay">
            <img src={item.img} alt={item.id + " " + item.description}></img>
          </div>
        </div>
        <div className="trending__item-description">
          <p className="trending__item-label">{item.description}</p>
          <p className="trending__item-price">{item.price}€</p>
        </div>
      </Link>
    </div>
  );
}

export default TrendingItem;
