import { useEffect, useState } from 'react';
import './cart.css';
import { useCart, useCartUpdate, useCartToggle } from '../../context/cartContext';
import CartItem from './cartItem';
import EmptyCart from '../../img/cart/empty-cart.png';

function Cart() {
  // State
  const [subtotal, setSubtotal] = useState(0);

  // Cart Context
  const { cartItems } = useCart();
  const { cartOpened, cartToggle } = useCartToggle();

  // Subtotal Recalculation
  const subtotalRecalculation = (deletedPrice = 0) => {
    let subtotal = 0;
    for (const item of cartItems) subtotal += item.quantity * item.price;
    subtotal -= deletedPrice;
    setSubtotal(subtotal);
  };

  // On Cart Items Change
  useEffect(() => {
    if (cartItems.length > 0) {
      subtotalRecalculation();
    }
  }, [cartOpened]);

  return (
    <>
      <div
        onClick={cartToggle}
        className={`cart__overlay ${cartOpened ? 'cart__overlay-opened' : 'cart__overlay-closed'}`}
      ></div>
      <div className={`cart ${cartOpened ? 'cart-opened' : 'cart-closed'}`}>
        <div className="cart__header">
          <h2 className="cart__header-title">Your Shopping Cart ({cartItems.length || 0})</h2>
          <button className="cart__header-btn" onClick={cartToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {cartItems.length ? (
          <div className="cart__body">
            <div className="cart__body__items-container">
              <div className="cart__body__items-wrapper">
                {cartItems.length &&
                  cartItems.map((item, id) => (
                    <CartItem key={id} item={item} totalRecalculation={subtotalRecalculation} />
                  ))}
              </div>
            </div>
            <div className="cart__footer">
              <div className="cart__footer-subtotal">
                <p className="cart__footer-subtotal-price">Subtotal: {subtotal + '.00€'}</p>
              </div>
              <div className="cart__footer-checkout">
                <button className="cart__footer-checkout-btn btn">Go to Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img src={EmptyCart} alt="empty cart" />
            <p className="cart__empty-subtitle">Your Cart is Empty</p>
            <button onClick={cartToggle} className="cart__empty-btn btn">
              Keep Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
