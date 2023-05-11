import { useEffect } from "react";
import "./cart.css";
import {
  useCart,
  useCartUpdate,
  useCartToggle,
} from "../../context/cartContext";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";

function Cart() {
  // Context
  const cartItems = useCart();
  const updateCartItems = useCartUpdate();
  const { cartOpened, cartToggle } = useCartToggle();

  // Local Storage Get
  useEffect(() => {
    const json = localStorage.getItem("cartItems");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      updateCartItems(savedCart);
    }
  }, []);

  // Local Storage Set
  useEffect(() => {
    const json = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", json);
  }, [cartItems]);

  return (
    <>
      <div
        onClick={cartToggle}
        className={`cart__overlay ${
          cartOpened ? "cart__overlay-opened" : "cart__overlay-closed"
        }`}
      ></div>

      <div className={`cart ${cartOpened ? "cart-opened" : "cart-closed"}`}>
        <div className="cart__header">
          <h2 className="cart__header-title">
            Your Shopping Cart ({cartItems.length})
          </h2>
          <button className="cart__header-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="cart__body">
          <div className="cart__body__items-container">
            <div className="cart__body__items-wrapper">
              {cartItems.map((item, id) => (
                <CartItem key={id} item={item} />
              ))}
            </div>
          </div>
          <div className="cart__footer">
            <div className="cart__footer-subtotal">
              <p className="cart__footer-subtotal-price">
                Subtotal: {123 + ".00$"}
              </p>
            </div>
            <div className="cart__footer-checkout">
              <button className="cart__footer-checkout-btn btn">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
