import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cartDropdown.context'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
const CartIcon = () => {
const {cartOpened, setCartOpened, cartItems} = useContext(CartDropdownContext)

let i = 0
const addquantity = (quantity) => {
   i = i + quantity
   console.log(i)

}

cartItems.map((item) => 
  addquantity(item.quantity)
)


  return (
    <div className='cart-icon-container'>
        <ShopingIcon className='shopping-icon' onClick={() => {setCartOpened(!cartOpened)}}/>
      

        <span className='item-count'>{`${i}`}</span>
    
    </div>
  )
}

export default CartIcon