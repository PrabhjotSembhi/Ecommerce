import React from 'react'

const CartItem = ({cartItem}) => {
  const {name, quantity} = cartItem
  return (
    <div>
      <h3>{name}</h3>
      <span>{quantity}</span>
    </div>
  )
}

export default CartItem