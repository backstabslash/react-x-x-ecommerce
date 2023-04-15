import "./proud.css";

function ProudItem({ item }) {
  return (
    <div className="proud__item">
      <a href="">
        <div className="proud__item-header">
          <img src={item.img} alt="1"></img>
        </div>
        <div className="proud__item-description">
          <p className="proud__item-label">{item.description}</p>
          <p className="proud__item-price">{item.price}€</p>
        </div>
      </a>
    </div>
  );
}

export default ProudItem;
