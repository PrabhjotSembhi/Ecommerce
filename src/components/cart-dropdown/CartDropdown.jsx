
import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cartDropdown.context'
import CartItem from '../../components/cart-item/CartItem'
import Button from '../button/Button'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems, addItemToCart} = useContext(CartDropdownContext)


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