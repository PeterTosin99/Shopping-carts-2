import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

    const removeFromCart = (id) => {
    };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart}}>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
}