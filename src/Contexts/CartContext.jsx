import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const items = JSON.parse(storedCartItems);
      if (items.length > 0) {
        setCartItems(items);
      }
    }
  }, []);
  // Empty dependency array to run only on initial mount

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    const exists = cartItems.some((item) => item.id === product.id);
    if (!exists) {
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedItems = cartItems.filter((item)=> !(product.some((id)=> id === item.id)));
    setCartItems(updatedItems);
  };

  const productInCart = (product) => {
    const exists = cartItems.some((item) => item.id === product.id);
    return exists;
  };

  const changeQuantity = (product, qty) => {
    if (qty > 0) {
      const newItems = cartItems.map((item) => {
        return item.id === product.id ? { ...item, qty } : item;
      });
      setCartItems(newItems);
    } else {
      return;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CartContext.Provider
      value={{
        addToCart,
        productInCart,
        removeFromCart,
        handleClose,
        handleShow,
        show,
        count: cartItems.length,
        cartItems,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
