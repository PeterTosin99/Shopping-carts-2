import React, { createContext, useState, useContext } from 'react';

// Define a context for the cart
const CartContext = createContext();

// Define the provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

    // Function to remove items from the cart
    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id)); // Remove item by ID
    };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart}}>
      {children} {/* Provides the cart context to all child components */}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};