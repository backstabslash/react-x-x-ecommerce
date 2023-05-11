import { useEffect, useState } from "react";
import { useCart, useCartUpdate } from "../../context/cartContext";

function CartItem({ id, item }) {
  const [quantity, setQuantity] = useState(0);
  const cartItems = useCart();
  const updateCartItems = useCartUpdate();

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

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  const removeFromCart = (id) => {
    const updateCart = cartItems.filter((item) => item.id !== id);
    updateCartItems(updateCart);
    const json = JSON.stringify(cartItems.id);
    localStorage.removeItem("cartItem", json);
  };

  return (
    <>
      <div key={id} className="cart__item">
        <div className="cart__item-img">
          <img src={item.img} alt="product" />
        </div>
        <div className="cart__item-middle">
          <p className="cart__item-name">{item.description}</p>
          <div className="cart__item-btns">
            <button className="cart__item-btns-decrease" onClick={decrease}>
              -
            </button>
            <p className="cart__item-quantity">{quantity}</p>
            <button className="cart__item-btns-increase" onClick={increase}>
              +
            </button>
          </div>
        </div>
        <div className="cart__item-right">
          <p className="cart__item-price">
            {calcPrice(quantity, item.price)}.00$
          </p>
          <button className="cart__item-delete-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
