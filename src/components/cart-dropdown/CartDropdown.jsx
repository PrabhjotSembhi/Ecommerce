import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cartDropdown.context'
import Button from '../button/Button'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const {cartOpened} = useContext(CartDropdownContext)

  return (
    <>
    {
      cartOpened ? 
     <div className='cart-dropdown-container'>
      <div className="cart-items">
          <Button>Go to checkout</Button>
      </div>
  </div>:''
  
    }
    </>
  
  )
}

export default CartDropdown