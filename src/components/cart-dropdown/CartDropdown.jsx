
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../../components/cart-item/CartItem'
import Button from '../button/Button'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems, addItemToCart} = useContext(CartContext)


  return (
   
     <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </div>
          <Button>Go to checkout</Button>
  </div>
  
  )
}

export default CartDropdown