import { useState } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
const CartIcon = () => {
const [cartOpened, setCartOpened] = useState(false)



  return (
    <div className='cart-icon-container'>
        <ShopingIcon className='shopping-icon' onClick={() => {setCartOpened(!cartOpened)}}/>
        <span className='item-count'>10</span>
     
    </div>
  )
}

export default CartIcon