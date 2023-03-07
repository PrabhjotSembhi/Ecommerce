import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
const Checkout = () => {

  const { cartItems, total } = useContext(CartContext);



  return (
    <div>
           {cartItems.map((item) => (
          <CheckoutItem key={item.id} CheckoutItem={item} />
        ))}

        <h3>Total: ${total}</h3>
    </div>
  )
}

export default Checkout