import React from 'react'
import './cart-item.styles.scss'
const CartItem = ({cartItem}) => {
  const {name, imgUrl, price, quantity} = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imgUrl} alt={`${name}` }/>
      <div className="item-details">

      <h3>{name}</h3>
      <span>{quantity}</span>
      </div>
    </div>
  )
}

export default CartItem