import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CartContext.Provider value={{ handleClose, handleShow, show }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
