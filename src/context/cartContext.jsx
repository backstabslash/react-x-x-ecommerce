import { createContext, useContext, useState } from "react";
import { items } from "../components/data";

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

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(items);
  const [cartOpened, setCartOpened] = useState(false);

  function updateCartItems(items) {
    setCartItems(items);
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
