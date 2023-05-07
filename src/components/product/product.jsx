import "./product.css";
import { items } from "../data";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  const [image, setImage] = useState(item[0].img);
  const [quantity, setQuantity] = useState(1);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  return (
    <section className="product container section">
      <div className="product__item">
        <div className="product__item-imgs">
          <div className="product__item-big-img">
            <img src={image} alt="product" />
          </div>
          <div className="product__item-small-img">
            <img onMouseOver={changeImage} src={item[0].img} alt="product" />
            <img
              onMouseOver={changeImage}
              src={item[0].otherImgs[0]}
              alt="product"
            />
            <img
              onMouseOver={changeImage}
              src={item[0].otherImgs[1]}
              alt="product"
            />
          </div>
        </div>
        <div className="product__item-cart">
          <h3 className="product__item-desc">{item[0].description}</h3>
          <p className="product__item-specs">{item[0].specs}</p>
          <div className="product__item-shopping">
            <p>Desired quantity</p>
            <div className="product__item-quantity-btns">
              <button
                className="product__item-quantity-decrease"
                onClick={decrease}
              >
                -
              </button>
              <p className="product__item-quantity">{quantity}</p>
              <button
                className="product__item-quantity-increase"
                onClick={increase}
              >
                +
              </button>
            </div>
            <p className="product__item-price">{calcPrice(quantity)}.00$</p>
          </div>
          <div className="product__item-shop-btns">
            <button className="product__item-cart-btn btn">add to cart</button>
            <button className="product__item-buy-btn btn">buy now</button>
          </div>
        </div>
      </div>
      <div className="product__specs">
        <div className="product__specs-spec">
          <p className="product__specs-title">Sole:</p>
          <p className="product__specs-desc">{item[0].sole}</p>
        </div>
        <div className="product__specs-spec">
          <p className="product__specs-title">Outer:</p>
          <p className="product__specs-desc">{item[0].outer}</p>
        </div>
        <div className="product__specs-spec">
          <p className="product__specs-title">Lining:</p>
          <p className="product__specs-desc">{item[0].lining}</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
