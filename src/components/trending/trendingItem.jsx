import "./trending.css";

function TrendingItem({ item }) {
  return (
    <div className="trending__item">
      <a href="">
        <div className="trending__item-header">
          <div className="trending__img-overlay">
            <img src={item.img} alt={item.id + " " + item.description}></img>
          </div>
        </div>
        <div className="trending__item-description">
          <p className="trending__item-label">{item.description}</p>
          <p className="trending__item-price">{item.price}€</p>
        </div>
      </a>
    </div>
  );
}

export default TrendingItem;
