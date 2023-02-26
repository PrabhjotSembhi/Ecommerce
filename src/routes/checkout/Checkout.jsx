import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
const Checkout = () => {

  const { cartItems } = useContext(CartContext);

  console.log(cartItems)


  return (
    <div>
           {cartItems.map((item) => (
          <CheckoutItem key={item.id} CheckoutItem={item} />
        ))}
    </div>
  )
}

export default Checkout