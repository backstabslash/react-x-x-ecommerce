import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartUpdateContext = createContext();
const CartToggleContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

export function useCartToggle() {
  return useContext(CartToggleContext);
}

const localStorageSet = (cartItems) => {
  const json = JSON.stringify(cartItems);
  localStorage.setItem("cartItems", json);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartOpened, setCartOpened] = useState(false);

  function updateCartItems(items) {
    setCartItems(items);
    localStorageSet(items);
  }

  function cartToggle() {
    setCartOpened(!cartOpened);
  }

  return (
    <CartContext.Provider value={cartItems}>
      <CartToggleContext.Provider value={{ cartOpened, cartToggle }}>
        <CartUpdateContext.Provider value={updateCartItems}>
          {children}
        </CartUpdateContext.Provider>
      </CartToggleContext.Provider>
    </CartContext.Provider>
  );
}
