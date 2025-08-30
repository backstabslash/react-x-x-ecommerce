import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const CartUpdateContext = createContext();
const CartToggleContext = createContext();

// Hook For Items
export function useCart() {
  return useContext(CartContext);
}

// Hook For Items Mutation
export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

// Hook For Swapping Cart Opened/Closed State
export function useCartToggle() {
  return useContext(CartToggleContext);
}

// Local Storage Set
const localStorageSet = (cartItems) => {
  const json = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', json);
};

export function CartProvider({ children }) {
  // State: Items and Bool for Opened/Closed Cart;
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [cartOpened, setCartOpened] = useState(false);
  // I Needed this State Because Header Component Didn't Wanna Rerender when cartItems.length Changed (Icon After Cart)
  const [cartItemsLength, setCartItemsLength] = useState(cartItems.length);

  // Mutating Items State and Updating Local Storage
  function updateCartItems(items) {
    setCartItems(items);
    setCartItemsLength(items.length);
    localStorageSet(items);
  }

  // Swapping Opened/Closed Cart State
  function cartToggle() {
    setCartOpened(!cartOpened);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartItemsLength }}>
      <CartToggleContext.Provider value={{ cartOpened, cartToggle }}>
        <CartUpdateContext.Provider value={updateCartItems}>{children}</CartUpdateContext.Provider>
      </CartToggleContext.Provider>
    </CartContext.Provider>
  );
}
