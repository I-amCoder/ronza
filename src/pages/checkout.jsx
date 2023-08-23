import React, { useContext } from 'react'
import CheckoutCard from '../Components/checkout/CheckoutCard'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import { CartContext } from '../Contexts/CartContext'

const Checkout = () => {
  const cart = useContext(CartContext);
  console.log(cart.cartItems);

  return (
    <>
    <BreadCrumb title={"Checkout"} links={[{path: "/", title:"Home"},{title:"Checkout"}]} />
    <CheckoutCard products={cart.cartItems} />
    </>
  )
}

export default Checkout