import { useEffect, useState } from 'react';
import { useCart, useCartUpdate } from '../../context/cartContext';

function CartItem({ id, item, totalRecalculation }) {
  // State
  const [quantity, setQuantity] = useState(item.quantity);

  // On Item Quantity Change
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  // Cart Context
  const { cartItems } = useCart();
  const updateCartItems = useCartUpdate();

  // On "+" Click
  const increaseQuantity = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);

      for (const cartItem of cartItems) if (cartItem.id === item.id) cartItem.quantity++;
      updateCartItems(cartItems);
      totalRecalculation();
    }
  };

  // On "-" Click
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      for (const cartItem of cartItems) if (cartItem.id === item.id) cartItem.quantity--;
      updateCartItems(cartItems);
      totalRecalculation();
    }
  };

  // Subtotal Recalculation
  const subtotalRecalculation = () => {
    return quantity * item.price;
  };

  // Delete Single Item On Click
  const removeFromCart = () => {
    const updateCart = cartItems.filter((itemDel) => itemDel.id !== item.id);
    updateCartItems(updateCart);
    totalRecalculation(item.price * item.quantity);
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
            <button className="cart__item-btns-decrease" onClick={decreaseQuantity}>
              -
            </button>
            <p className="cart__item-quantity">{quantity}</p>
            <button className="cart__item-btns-increase" onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>
        <div className="cart__item-right">
          <p className="cart__item-price">{subtotalRecalculation() + '.00€'}</p>
          <button className="cart__item-delete-btn" onClick={() => removeFromCart()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
