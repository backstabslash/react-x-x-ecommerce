import './product.css';
import { items } from '../data';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart, useCartUpdate } from '../../context/cartContext';

function Product() {
  // Product
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  // State
  const [image, setImage] = useState(item[0].img);
  const [quantity, setQuantity] = useState(1);

  // Cart Context
  const { cartItems } = useCart();
  const updateCartItems = useCartUpdate();

  // On Mouse Over Change Big Img
  const changeMainImage = (e) => {
    setImage(e.target.src);
  };

  // On "+" Click
  const increaseQuantity = () => {
    if (quantity >= 1) setQuantity(quantity + 1);
  };

  // On "-" Click
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Recalculate Subtotal
  const recalculatePrice = () => {
    return quantity * item[0].price;
  };

  // Update Cart Context State
  const addItemQuantity = () => {
    const productItem = item[0];

    if (cartItems.length > 0) {
      // If Array isn't Empty and Includes Item Already
      let existence = false;
      for (const cartItem of cartItems) {
        if (cartItem.id === parseInt(id)) {
          cartItem.quantity += quantity;
          existence = true;
        }
      }
      // If Array isn't Empty and Doesn't Includes Item Already
      if (!existence) {
        productItem.quantity = quantity;
        cartItems.push(productItem);
      }
    } else {
      // If Array is Empty Just Push First Item
      productItem.quantity = quantity;
      cartItems.push(productItem);
    }

    updateCartItems(cartItems);
  };

  return (
    <section className="product container section">
      <div className="product__item">
        <div className="product__item-imgs">
          <div className="product__item-big-img">
            <img src={image} alt="product" />
          </div>
          <div className="product__item-small-img">
            <img onMouseOver={changeMainImage} src={item[0].img} alt="product" />
            <img onMouseOver={changeMainImage} src={item[0].otherImgs[0]} alt="product" />
            <img onMouseOver={changeMainImage} src={item[0].otherImgs[1]} alt="product" />
          </div>
        </div>
        <div className="product__item-cart">
          <h3 className="product__item-desc">{item[0].description}</h3>
          <p className="product__item-specs">{item[0].specs}</p>
          <div className="product__item-shopping">
            <p>Desired Quantity</p>
            <div className="product__item-quantity-btns">
              <button className="product__item-quantity-decrease" onClick={decreaseQuantity}>
                -
              </button>
              <p className="product__item-quantity">{quantity}</p>
              <button className="product__item-quantity-increase" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <p className="product__item-price">{recalculatePrice()}.00€</p>
          </div>
          <div className="product__item-shop-btns">
            <button className="product__item-cart-btn btn" onClick={addItemQuantity}>
              Add to cart
            </button>
            <button className="product__item-buy-btn btn">Buy now</button>
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
