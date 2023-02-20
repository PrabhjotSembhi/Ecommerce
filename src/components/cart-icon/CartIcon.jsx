import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cartDropdown.context'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
const CartIcon = () => {
const {cartOpened, setCartOpened, cartCount} = useContext(CartDropdownContext)


  return (
    <div className='cart-icon-container'>
        <ShopingIcon className='shopping-icon' onClick={() => {setCartOpened(!cartOpened)}}/>
      

        <span className='item-count'>{cartCount}</span>
    
    </div>
  )
}

export default CartIcon