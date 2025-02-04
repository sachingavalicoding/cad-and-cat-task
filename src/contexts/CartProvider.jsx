import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setCartLoading(false);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const deleteItem = useCallback((id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  }, [cartItems]);

  const addToCart = useCallback((newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...newItem, quantity: 1 }
        ];
      }
    });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    cartItems,
    cartLoading,
    addToCart,
    updateQuantity,
    deleteItem
  }), [cartItems, cartLoading, addToCart, updateQuantity, deleteItem]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
