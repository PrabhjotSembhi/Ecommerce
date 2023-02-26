import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({CheckoutItem}) => {
  
  const {name, imageUrl, price, quantity} = CheckoutItem
  const { removeCartItem } = useContext(CartContext);

  return (
    <div>
         <img src={imageUrl} alt={`${name}` }/>
\
      <h3 className=''>{name}</h3>

      <button>Increase</button>
      <span className=''>{quantity}</span>
      <button>Decrease</button>


      <span className=''> ${price}</span>
      <button onClick={() => removeCartItem(CheckoutItem)}>Remove</button>

    </div>
  )
}

export default CheckoutItem